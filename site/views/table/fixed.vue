<template>
  <div style="height: 300px;">
    <bk-table :columns="columns" :data="tableData" :max-height="maxHeight" @scroll-bottom="handleScrollBottom" />
  </div>
</template>

<script setup type="jsx">
import { defineComponent, ref, computed, reactive } from 'vue';
import demo from './demo.json';
import { DATA_FIX_COLUMNS, DATA_FIX_TABLE } from './options';
const t = (str) => str;

const tableData = reactive(demo.data.results);

const columns = computed(() => [
  {
    width: 80,
    fixed: 'left',
    label: () => {
      return 'checkbox'
    },
    render: ({ data }) => {
      return 'checkbox'
    },
  },
  {
    label: 'ID',
    field: 'id',
    fixed: 'left',
    width: 100,
  },
  {
    label: t('主访问入口'),
    field: 'master_domain',
    fixed: 'left',
    minWidth: 300,
    showOverflowTooltip: false,
    // render: ({ data }: ColumnData) => (
    //   <TextOverflowLayout>
    //     {{
    //       default: () => (
    //         <auth-button
    //           action-id="mysql_view"
    //           resource={data.id}
    //           permission={data.permission.mysql_view}
    //           text
    //           theme="primary"
    //           onClick={() => handleToDetails(data.id)}>
    //           {data.masterDomainDisplayName}
    //         </auth-button>
    //       ),
    //       append: () => (
    //         <>
    //           <db-icon
    //             type="copy"
    //             v-bk-tooltips={t('复制主访问入口')}
    //             onClick={() => copy(data.masterDomainDisplayName)} />
    //           <auth-button
    //             v-bk-tooltips={t('修改入口配置')}
    //             v-db-console="mysql.haClusterList.modifyEntryConfiguration"
    //             action-id="access_entry_edit"
    //             resource="mysql"
    //             permission={data.permission.access_entry_edit}
    //             text
    //             theme="primary"
    //             onClick={() => handleOpenEntryConfig(data)}>
    //             <db-icon type="edit" />
    //           </auth-button>
    //         </>
    //       ),
    //     }}
    //   </TextOverflowLayout>
    // ),
  },
  {
    label: t('集群名称'),
    field: 'cluster_name',
    minWidth: 200,
    width: 200,
    fixed: 'left',
    showOverflowTooltip: false,
    // render: ({ data }) =>
    // (
    //   <TextOverflowLayout>
    //     {{
    //       default: () => data.cluster_name,
    //       append: () => (
    //         <>
    //           {
    //             data.operationTagTips.map(item => <RenderOperationTag class="cluster-tag ml-4" data={item} />)
    //           }
    //           {
    //             data.isOffline && !data.isStarting && (
    //               <db-icon
    //                 svg
    //                 type="yijinyong"
    //                 class="cluster-tag ml-4"
    //                 style="width: 38px; height: 16px;" />
    //             )
    //           }
    //           {
    //             isRecentDays(data.create_at, 24 * 3) && (
    //               <span
    //                 class="glob-new-tag cluster-tag ml-4"
    //                 data-text="NEW" />
    //             )
    //           }
    //           <db-icon
    //             v-bk-tooltips={t('复制集群名称')}
    //             type="copy"
    //             onClick={() => copy(data.cluster_name)} />
    //         </>
    //       ),
    //     }}
    //   </TextOverflowLayout>
    // ),
  },
  {
    label: t('管控区域'),
    field: 'bk_cloud_id',
    filter: {
      // list: columnAttrs.value.bk_cloud_id,
      // checked: columnCheckedMap.value.bk_cloud_id,
    },
    width: 90,
    render: ({ data }) => data.bk_cloud_name ?? '--',
  },
  {
    label: t('状态'),
    field: 'status',
    width: 90,
    filter: {
      list: [
        {
          value: 'normal',
          text: t('正常'),
        },
        {
          value: 'abnormal',
          text: t('异常'),
        },
      ],
      checked: [],
    },
    render: ({ data }) => {
      const info = data.status === 'normal' ? { theme: 'success', text: t('正常') } : { theme: 'danger', text: t('异常') };
      return info.text;
    },
  },
  {
    label: t('从访问入口'),
    field: 'slave_domain',
    minWidth: 200,
    width: 220,
    showOverflowTooltip: false,
    // render: ({ data }) => (
    //   <TextOverflowLayout>
    //     {{
    //       default: () => data.slaveDomainDisplayName || '--',
    //       append: () => (
    //         <>
    //           <db-icon
    //             v-bk-tooltips={t('复制从访问入口')}
    //             type="copy"
    //             onClick={() => copy(data.slaveDomainDisplayName)} />
    //           <auth-button
    //             v-bk-tooltips={t('修改入口配置')}
    //             v-db-console="mysql.haClusterList.modifyEntryConfiguration"
    //             action-id="access_entry_edit"
    //             resource="mysql"
    //             permission={data.permission.access_entry_edit}
    //             text
    //             theme="primary"
    //             onClick={() => handleOpenEntryConfig(data)}>
    //             <db-icon type="edit" />
    //           </auth-button>
    //         </>
    //       )
    //     }}
    //   </TextOverflowLayout>
    // ),
  },
  {
    label: 'Proxy',
    field: 'proxies',
    width: 200,
    minWidth: 200,
    showOverflowTooltip: false,
    // render: ({ data }) => (
    //   <RenderInstances
    //     highlightIps={batchSearchIpInatanceList.value}
    //     data={data.proxies || []}
    //     title={t('【inst】实例预览', { inst: data.master_domain, title: 'Proxy' })}
    //     role="proxy"
    //     clusterId={data.id}
    //     dataSource={getTendbhaInstanceList}
    //   />
    // ),
  },
  {
    label: 'Master',
    field: 'masters',
    width: 200,
    minWidth: 200,
    showOverflowTooltip: false,
    // render: ({ data }) => (
    //   <RenderInstances
    //     highlightIps={batchSearchIpInatanceList.value}
    //     data={data.masters}
    //     title={t('【inst】实例预览', { inst: data.master_domain, title: 'Master' })}
    //     role="proxy"
    //     clusterId={data.id}
    //     dataSource={getTendbhaInstanceList}
    //   />
    // ),
  },
  {
    label: 'Slave',
    field: 'slaves',
    width: 200,
    minWidth: 200,
    showOverflowTooltip: false,
    // render: ({ data }) => (
    //   <RenderInstances
    //     highlightIps={batchSearchIpInatanceList.value}
    //     data={data.slaves || []}
    //     title={t('【inst】实例预览', { inst: data.master_domain, title: 'Slave' })}
    //     role="slave"
    //     clusterId={data.id}
    //     dataSource={getTendbhaInstanceList}
    //   />
    // ),
  },
  {
    label: t('所属DB模块'),
    field: 'db_module_id',
    width: 140,
    filter: {
      // list: columnAttrs.value.db_module_id,
      // checked: columnCheckedMap.value.db_module_id,
    },
    render: ({ data }) => data.db_module_name || '--',
  },
  {
    label: t('版本'),
    field: 'major_version',
    minWidth: 100,
    filter: {
      // list: columnAttrs.value.major_version,
      // checked: columnCheckedMap.value.major_version,
    },
    render: ({ cell }) => { cell || '--' },
  },
  {
    label: t('地域'),
    field: 'region',
    minWidth: 100,
    filter: {
      // list: columnAttrs.value.region,
      // checked: columnCheckedMap.value.region,
    },
    render: ({ cell }) => { cell || '--' },
  },
  {
    label: t('创建人'),
    field: 'creator',
    width: 140,
    render: ({ cell }) => { cell || '--' },
  },
  {
    label: t('部署时间'),
    field: 'create_at',
    width: 200,
    sort: true,
    render: ({ data }) => { data || '--' },
  },
  {
    label: t('时区'),
    field: 'cluster_time_zone',
    width: 100,
    filter: {
      // list: columnAttrs.value.time_zone,
      // checked: columnCheckedMap.value.time_zone,
    },
    render: ({ cell }) => { cell || '--' },
  },
]);

const maxHeight = ref(300);

const handleDblClick = (...args) => {
  console.log(args);
}
const handleScrollBottom = (args) => {
  console.log('handleScrollBottom', args);
}
</script>
