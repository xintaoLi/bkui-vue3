<template>
  <bk-form class="example">
    <bk-form-item
      description="中文名"
      label="姓名"
    >
      <bk-input
        placeholder="请输入"
        clearable
      />
    </bk-form-item>
    <bk-form-item label="性别">
      <bk-radio-group>
        <bk-radio label="男" />
        <bk-radio label="女" />
      </bk-radio-group>
    </bk-form-item>
    <bk-form-item
      description="常用联系方式"
      label="联系方式"
    >
      <bk-checkbox-group>
        <bk-checkbox label="QQ" />
        <bk-checkbox label="微信" />
        <bk-checkbox label="Email" />
      </bk-checkbox-group>
    </bk-form-item>
    <bk-form-item label="学历">
      <bk-select>
        <bk-option
          label="本科以下"
          value="1"
        />
        <bk-option
          label="本科以上"
          value="2"
        />
      </bk-select>
    </bk-form-item>
    <bk-form-item label="介绍">
      <bk-input
        placeholder="请输入"
        type="textarea"
      />
    </bk-form-item>
    <bk-form-item style="margin-top: 32px">
      <bk-button theme="primary"> 提交 </bk-button>
    </bk-form-item>
  </bk-form>
</template>
<script setup>
  import BkButton from '@bkui-vue/button';
  import BkCheckbox, { BkCheckboxGroup } from '@bkui-vue/checkbox';
  import BkForm, { BkFormItem } from '@bkui-vue/form';
  import BkInput from '@bkui-vue/input';
  import BkRadio, { BkRadioGroup } from '@bkui-vue/radio';
  import BkSelect, { BkOption } from '@bkui-vue/select';
</script>
<style lang="postcss" scoped>
  .example {
    max-width: 800px;
  }
</style>
