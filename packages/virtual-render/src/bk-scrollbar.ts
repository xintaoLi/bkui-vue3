/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
import SimpleBarCore from './scrollbar-core';

const { getOptions, addClasses, classNamesToQuery } = SimpleBarCore.helpers;

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export default class BkSimpleBar extends SimpleBarCore {
  static globalObserver: MutationObserver;

  static instances = new WeakMap();

  static initDOMLoadedElements() {
    document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
    window.removeEventListener('load', this.initDOMLoadedElements);

    Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), el => {
      if (el.getAttribute('data-simplebar') !== 'init' && !BkSimpleBar.instances.has(el))
        new BkSimpleBar(el, getOptions(el.attributes));
    });
  }

  static removeObserver() {
    BkSimpleBar.globalObserver?.disconnect();
  }

  static initHtmlApi() {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);

    // MutationObserver is IE11+
    if (typeof MutationObserver !== 'undefined') {
      // Mutation observer to observe dynamically added elements
      this.globalObserver = new MutationObserver(BkSimpleBar.handleMutations);

      this.globalObserver.observe(document, { childList: true, subtree: true });
    }

    // Taken from jQuery `ready` function
    // Instantiate elements already present on the page
    if (
      document.readyState === 'complete' || // @ts-ignore: IE specific
      (document.readyState !== 'loading' && !document.documentElement.doScroll)
    ) {
      // Handle it asynchronously to allow scripts the opportunity to delay init
      window.setTimeout(this.initDOMLoadedElements);
    } else {
      document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
      window.addEventListener('load', this.initDOMLoadedElements);
    }
  }

  static handleMutations(mutations: MutationRecord[]) {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(addedNode => {
        if (addedNode.nodeType === 1) {
          if ((addedNode as Element).hasAttribute('data-simplebar')) {
            !BkSimpleBar.instances.has(addedNode) &&
              document.documentElement.contains(addedNode) &&
              new BkSimpleBar(addedNode as HTMLElement, getOptions((addedNode as Element).attributes));
          } else {
            (addedNode as Element).querySelectorAll('[data-simplebar]').forEach(el => {
              if (
                el.getAttribute('data-simplebar') !== 'init' &&
                !BkSimpleBar.instances.has(el) &&
                document.documentElement.contains(el)
              )
                new BkSimpleBar(el as HTMLElement, getOptions(el.attributes));
            });
          }
        }
      });

      mutation.removedNodes.forEach(removedNode => {
        if (removedNode.nodeType === 1) {
          if ((removedNode as Element).getAttribute('data-simplebar') === 'init') {
            BkSimpleBar.instances.has(removedNode) &&
              !document.documentElement.contains(removedNode) &&
              BkSimpleBar.instances.get(removedNode).unMount();
          } else {
            Array.prototype.forEach.call((removedNode as Element).querySelectorAll('[data-simplebar="init"]'), el => {
              BkSimpleBar.instances.has(el) &&
                !document.documentElement.contains(el) &&
                BkSimpleBar.instances.get(el).unMount();
            });
          }
        }
      });
    });
  }

  constructor(...args: ConstructorParameters<typeof SimpleBarCore>) {
    super(...args);

    // // Save a reference to the instance, so we know this DOM node has already been instancied
    BkSimpleBar.instances.set(args[0], this);
  }

  initDOM() {
    // make sure this element doesn't have the elements yet
    if (
      !Array.prototype.filter.call(this.el.children, child => child.classList.contains(this.classNames.wrapper)).length
    ) {
      // Prepare DOM
      this.wrapperEl = this.options.wrapperNode ?? this.createScrollElement(this.classNames.wrapper);
      this.contentEl = this.options.contentNode ?? this.createScrollElement(this.classNames.contentEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      const track = document.createElement('div');
      const scrollbar = document.createElement('div');

      addClasses(track, this.classNames.track);
      addClasses(scrollbar, this.classNames.scrollbar);

      track.appendChild(scrollbar);

      this.axis.x.track.el = track.cloneNode(true) as HTMLElement;
      addClasses(this.axis.x.track.el, this.classNames.horizontal);

      this.axis.y.track.el = track.cloneNode(true) as HTMLElement;
      addClasses(this.axis.y.track.el, this.classNames.vertical);

      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    SimpleBarCore.prototype.initDOM.call(this);

    this.el.setAttribute('data-simplebar', 'init');
  }

  unMount() {
    SimpleBarCore.prototype.unMount.call(this);
    BkSimpleBar.instances.delete(this.el);
  }

  private createScrollElement(className: string): HTMLElement {
    const createEl = () => {
      const el = document.createElement('div');
      addClasses(el, className);
      return el;
    };

    const origin = this.el.querySelector(classNamesToQuery(className));

    return (origin ?? createEl()) as HTMLElement;
  }
}

/**
 * HTML API
 * Called only in a browser env.
 */
if (canUseDOM) {
  BkSimpleBar.initHtmlApi();
}
