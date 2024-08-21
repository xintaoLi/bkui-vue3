<!--
 * TencentBlueKing is pleased to support the open source community by making 蓝鲸智云-DB管理系统(BlueKing-BK-DBM) available.
 *
 * Copyright (C) 2017-2023 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License athttps://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
 * the specific language governing permissions and limitations under the License.
-->

<template>
  <div class="redis-cluster-list-page">
    <div class="table-wrapper-out">
      <div
        class="table-wrapper">
        <bk-table
          ref="tableRef"
          :columns="columns"
          :data="dataList"
          virtual-enabled
          :row-height="calcRowHeight"
          :settings="defaultSettings"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="tsx">
  import { computed, reactive } from 'vue'

  const dataList = reactive([
  {
    "id": 111,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "backuprestore",
    "cluster_alias": "backuprestore",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "TwemproxyRedisInstance",
    "cluster_type_name": "TendisCache集群",
    "master_domain": "cache.backuprestore.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "cache.backuprestore.k8stest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Redis-6",
    "region": "南京",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "moyeluo",
    "updater": "moyeluo",
    "create_at": "2023-12-01T16:30:23+08:00",
    "update_at": "2024-06-07T10:17:20+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "",
      "spec_id": 75,
      "spec_name": "4c_32g_300gb",
      "spec_cluster_type": "TwemproxyRedisInstance",
      "spec_machine_type": "tendiscache",
      "cpu": {
        "max": 8,
        "min": 4
      },
      "mem": {
        "max": 32,
        "min": 30
      },
      "device_class": [
        "S5.2XLARGE32",
        "S5.4XLARGE32",
        "S5t.2XLARGE32"
      ],
      "storage_spec": [
        {
          "size": 300,
          "type": "ALL",
          "mount_point": "/data"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {}
    },
    "cluster_capacity": 31,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "11.160.196.47",
        "port": 50000,
        "instance": "11.160.196.47:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13949510,
        "bk_host_id": 5744159,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "11.152.236.232",
        "port": 50000,
        "instance": "11.152.236.232:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13949509,
        "bk_host_id": 5744125,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "11.186.74.224",
        "port": 50000,
        "instance": "11.186.74.224:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083393,
        "bk_host_id": 5738178,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "11.186.93.253",
        "port": 30002,
        "instance": "11.186.93.253:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083287,
        "bk_host_id": 5820623,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.186.93.253",
        "port": 30003,
        "instance": "11.186.93.253:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083288,
        "bk_host_id": 5820623,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.186.93.253",
        "port": 30000,
        "instance": "11.186.93.253:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083285,
        "bk_host_id": 5820623,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.186.93.253",
        "port": 30001,
        "instance": "11.186.93.253:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083286,
        "bk_host_id": 5820623,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "21.35.77.111",
        "port": 30000,
        "instance": "21.35.77.111:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083289,
        "bk_host_id": 6617475,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.35.77.111",
        "port": 30001,
        "instance": "21.35.77.111:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083290,
        "bk_host_id": 6617475,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.35.77.111",
        "port": 30002,
        "instance": "21.35.77.111:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083291,
        "bk_host_id": 6617475,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.35.77.111",
        "port": 30003,
        "instance": "21.35.77.111:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083292,
        "bk_host_id": 6617475,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 4,
    "machine_pair_cnt": 1,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 123,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [
      {
        "operator": "vitoxie",
        "cluster_id": 123,
        "flow_id": 1595,
        "ticket_id": 479,
        "ticket_type": "REDIS_CLUSTER_CUTOFF",
        "title": "Redis 整机替换",
        "status": "RUNNING"
      },
      {
        "operator": "cyckercai",
        "cluster_id": 123,
        "flow_id": 202210,
        "ticket_id": 181924,
        "ticket_type": "REDIS_CLUSTER_INSTANCE_SHUTDOWN",
        "title": "Redis 故障自愈-实例下架",
        "status": "RUNNING"
      }
    ],
    "cluster_time_zone": "+08:00",
    "cluster_name": "cyc0510",
    "cluster_alias": "cyc0510",
    "cluster_access_port": 52013,
    "cluster_stats": {},
    "cluster_type": "TwemproxyRedisInstance",
    "cluster_type_name": "TendisCache集群",
    "master_domain": "cache2013.cyc0510.redistest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "cache2013.cyc0510.redistest.db",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "clb",
        "entry": "30.160.43.49",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "polaris",
        "entry": "polaris.cache2013.cyc0510.redistest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Redis-7",
    "region": "上海",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "cyckercai",
    "updater": "cyckercai",
    "create_at": "2023-12-07T09:56:46+08:00",
    "update_at": "2023-12-07T09:56:46+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "",
      "spec_id": 76,
      "spec_name": "8c_64g_400gb",
      "spec_cluster_type": "TwemproxyRedisInstance",
      "spec_machine_type": "tendiscache",
      "cpu": {
        "max": 16,
        "min": 8
      },
      "mem": {
        "max": 64,
        "min": 61
      },
      "device_class": [
        "S5.4XLARGE64",
        "S5t.4XLARGE64",
        "SA3.4XLARGE64"
      ],
      "storage_spec": [
        {
          "size": 400,
          "type": "HDD",
          "mount_point": "/data"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {}
    },
    "cluster_capacity": 125,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "9.140.189.97",
        "port": 52013,
        "instance": "9.140.189.97:52013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948775,
        "bk_host_id": 4057419,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53013
      },
      {
        "name": "",
        "ip": "9.140.208.141",
        "port": 52013,
        "instance": "9.140.208.141:52013",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948774,
        "bk_host_id": 3156268,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53013
      },
      {
        "name": "",
        "ip": "9.143.81.180",
        "port": 52013,
        "instance": "9.143.81.180:52013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948773,
        "bk_host_id": 4147666,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53013
      },
      {
        "name": "",
        "ip": "11.159.219.210",
        "port": 52013,
        "instance": "11.159.219.210:52013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14131443,
        "bk_host_id": 1868872,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53013
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30000,
        "instance": "30.42.252.110:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948807,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30001,
        "instance": "30.42.252.110:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948806,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30002,
        "instance": "30.42.252.110:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948805,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30003,
        "instance": "30.42.252.110:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948804,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30004,
        "instance": "30.42.252.110:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948803,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30005,
        "instance": "30.42.252.110:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948802,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30000,
        "instance": "11.150.82.34:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948791,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30006,
        "instance": "30.42.252.110:30006",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948801,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30007,
        "instance": "30.42.252.110:30007",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948800,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30001,
        "instance": "11.150.82.34:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948790,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30008,
        "instance": "30.42.252.110:30008",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948799,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30002,
        "instance": "11.150.82.34:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948789,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30009,
        "instance": "30.42.252.110:30009",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948798,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30003,
        "instance": "11.150.82.34:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948788,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30010,
        "instance": "30.42.252.110:30010",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948797,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30004,
        "instance": "11.150.82.34:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948787,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30011,
        "instance": "30.42.252.110:30011",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948796,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30005,
        "instance": "11.150.82.34:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948786,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30012,
        "instance": "30.42.252.110:30012",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948795,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30013,
        "instance": "30.42.252.110:30013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948794,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30006,
        "instance": "11.150.82.34:30006",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948785,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30014,
        "instance": "30.42.252.110:30014",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948793,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30007,
        "instance": "11.150.82.34:30007",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948784,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.42.252.110",
        "port": 30015,
        "instance": "30.42.252.110:30015",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948792,
        "bk_host_id": 2357223,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30008,
        "instance": "11.150.82.34:30008",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948783,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30009,
        "instance": "11.150.82.34:30009",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948782,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30010,
        "instance": "11.150.82.34:30010",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948781,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30011,
        "instance": "11.150.82.34:30011",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948780,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30012,
        "instance": "11.150.82.34:30012",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948779,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30013,
        "instance": "11.150.82.34:30013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948778,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30014,
        "instance": "11.150.82.34:30014",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948777,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.82.34",
        "port": 30015,
        "instance": "11.150.82.34:30015",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948776,
        "bk_host_id": 2519069,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30015,
        "instance": "9.140.208.132:30015",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948808,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30014,
        "instance": "9.140.208.132:30014",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948809,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30013,
        "instance": "9.140.208.132:30013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948810,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30012,
        "instance": "9.140.208.132:30012",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948811,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30011,
        "instance": "9.140.208.132:30011",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948812,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30010,
        "instance": "9.140.208.132:30010",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948813,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30009,
        "instance": "9.140.208.132:30009",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948814,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30008,
        "instance": "9.140.208.132:30008",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948815,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30015,
        "instance": "9.143.66.2:30015",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948824,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30007,
        "instance": "9.140.208.132:30007",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948816,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30014,
        "instance": "9.143.66.2:30014",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948825,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30013,
        "instance": "9.143.66.2:30013",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948826,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30006,
        "instance": "9.140.208.132:30006",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948817,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30012,
        "instance": "9.143.66.2:30012",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948827,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30005,
        "instance": "9.140.208.132:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948818,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30011,
        "instance": "9.143.66.2:30011",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948828,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30004,
        "instance": "9.140.208.132:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948819,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30010,
        "instance": "9.143.66.2:30010",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948829,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30003,
        "instance": "9.140.208.132:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948820,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30009,
        "instance": "9.143.66.2:30009",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948830,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30008,
        "instance": "9.143.66.2:30008",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948831,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30002,
        "instance": "9.140.208.132:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948821,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30007,
        "instance": "9.143.66.2:30007",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948832,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30001,
        "instance": "9.140.208.132:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948822,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30006,
        "instance": "9.143.66.2:30006",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948833,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.208.132",
        "port": 30000,
        "instance": "9.140.208.132:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948823,
        "bk_host_id": 3752152,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30005,
        "instance": "9.143.66.2:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948834,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30004,
        "instance": "9.143.66.2:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948835,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30003,
        "instance": "9.143.66.2:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948836,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30002,
        "instance": "9.143.66.2:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948837,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30001,
        "instance": "9.143.66.2:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948838,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.66.2",
        "port": 30000,
        "instance": "9.143.66.2:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948839,
        "bk_host_id": 2871065,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 76,
          "cpu": {
            "max": 16,
            "min": 8
          },
          "mem": {
            "max": 64,
            "min": 61
          },
          "qps": {},
          "name": "8c_64g_400gb",
          "device_class": [
            "S5.4XLARGE64",
            "S5t.4XLARGE64",
            "SA3.4XLARGE64"
          ],
          "storage_spec": [
            {
              "size": 400,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 32,
    "machine_pair_cnt": 2,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21001753,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "lukehello",
    "cluster_alias": "lukehello",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "PredixyRedisCluster",
    "cluster_type_name": "RedisCluster集群",
    "master_domain": "rediscluster.lukehello.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "rediscluster.lukehello.k8stest.db",
        "role": "proxy_entry"
      },
      {
        "cluster_entry_type": "dns",
        "entry": "nodes.rediscluster.lukehello.k8stest.db",
        "role": "node_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Redis-6",
    "region": "上海",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "lukexwang",
    "updater": "",
    "create_at": "2024-06-07T14:27:33+08:00",
    "update_at": "2024-06-07T14:27:34+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "",
      "spec_id": 233,
      "spec_name": "2c_4g_50gb",
      "spec_cluster_type": "PredixyRedisCluster",
      "spec_machine_type": "tendiscache",
      "cpu": {
        "max": 2,
        "min": 2
      },
      "mem": {
        "max": 4,
        "min": 3
      },
      "device_class": [
        "S5.MEDIUM4",
        "S5t.MEDIUM4",
        "SA2.MEDIUM4"
      ],
      "storage_spec": [],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 0,
        "min": 0
      }
    },
    "cluster_capacity": 10.5,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "30.41.99.47",
        "port": 50000,
        "instance": "30.41.99.47:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084099,
        "bk_host_id": 3155495,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 230,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "11.147.13.47",
        "port": 50000,
        "instance": "11.147.13.47:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084098,
        "bk_host_id": 3229814,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 230,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "21.29.227.2",
        "port": 30000,
        "instance": "21.29.227.2:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084097,
        "bk_host_id": 6200018,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.29.227.2",
        "port": 30001,
        "instance": "21.29.227.2:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084096,
        "bk_host_id": 6200018,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.101.99",
        "port": 30000,
        "instance": "9.143.101.99:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084095,
        "bk_host_id": 3465733,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.101.99",
        "port": 30001,
        "instance": "9.143.101.99:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084094,
        "bk_host_id": 3465733,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.99.71",
        "port": 30000,
        "instance": "30.41.99.71:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084093,
        "bk_host_id": 3155492,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.99.71",
        "port": 30001,
        "instance": "30.41.99.71:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084092,
        "bk_host_id": 3155492,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "30.41.102.87",
        "port": 30001,
        "instance": "30.41.102.87:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084086,
        "bk_host_id": 6696763,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.102.87",
        "port": 30000,
        "instance": "30.41.102.87:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084087,
        "bk_host_id": 6696763,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.103.182",
        "port": 30001,
        "instance": "30.41.103.182:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084088,
        "bk_host_id": 6696762,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.103.182",
        "port": 30000,
        "instance": "30.41.103.182:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084089,
        "bk_host_id": 6696762,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.102.10",
        "port": 30001,
        "instance": "30.41.102.10:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084090,
        "bk_host_id": 6696764,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.41.102.10",
        "port": 30000,
        "instance": "30.41.102.10:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084091,
        "bk_host_id": 6696764,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 233,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 0,
            "min": 0
          },
          "name": "2c_4g_50gb",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 6,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21001727,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "lukenanjingtest01",
    "cluster_alias": "k8sswitchtest",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "PredixyTendisplusCluster",
    "cluster_type_name": "Tendisplus存储版集群",
    "master_domain": "tendisx.lukenanjingtest01.redistest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "tendisx.lukenanjingtest01.redistest.db",
        "role": "proxy_entry"
      },
      {
        "cluster_entry_type": "dns",
        "entry": "nodes.tendisx.lukenanjingtest01.redistest.db",
        "role": "node_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Tendisplus-2.7",
    "region": "南京",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "lukexwang",
    "updater": "",
    "create_at": "2024-06-01T16:32:55+08:00",
    "update_at": "2024-06-01T16:32:55+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "lukexwang",
      "spec_id": 88,
      "spec_name": "4c_16g_200g",
      "spec_cluster_type": "PredixyTendisplusCluster",
      "spec_machine_type": "tendisplus",
      "cpu": {
        "max": 6,
        "min": 4
      },
      "mem": {
        "max": 16,
        "min": 15
      },
      "device_class": [
        "S5t.2XLARGE16",
        "S5.LARGE16",
        "SA2.2XLARGE16",
        "SA3.LARGE16"
      ],
      "storage_spec": [
        {
          "size": 200,
          "type": "ALL",
          "mount_point": "/data"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 30000,
        "min": 20000
      }
    },
    "cluster_capacity": 300,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "11.152.236.235",
        "port": 50000,
        "instance": "11.152.236.235:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124581,
        "bk_host_id": 5744123,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.35.75.143",
        "port": 50000,
        "instance": "21.35.75.143:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124582,
        "bk_host_id": 6424789,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "9.219.83.109",
        "port": 30000,
        "instance": "9.219.83.109:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124575,
        "bk_host_id": 6241154,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 88,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {
            "max": 30000,
            "min": 20000
          },
          "name": "4c_16g_200g",
          "count": 3,
          "device_class": [
            "S5t.2XLARGE16",
            "S5.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 200,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.219.83.57",
        "port": 30000,
        "instance": "9.219.83.57:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124576,
        "bk_host_id": 6241153,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 88,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {
            "max": 30000,
            "min": 20000
          },
          "name": "4c_16g_200g",
          "count": 3,
          "device_class": [
            "S5t.2XLARGE16",
            "S5.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 200,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.219.82.246",
        "port": 30000,
        "instance": "9.219.82.246:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124577,
        "bk_host_id": 6241148,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 88,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {
            "max": 30000,
            "min": 20000
          },
          "name": "4c_16g_200g",
          "count": 3,
          "device_class": [
            "S5t.2XLARGE16",
            "S5.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 200,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "11.152.248.33",
        "port": 30000,
        "instance": "11.152.248.33:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124578,
        "bk_host_id": 6731177,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 88,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {
            "max": 30000,
            "min": 20000
          },
          "name": "4c_16g_200g",
          "count": 3,
          "device_class": [
            "S5t.2XLARGE16",
            "S5.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 200,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.152.248.102",
        "port": 30000,
        "instance": "11.152.248.102:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124579,
        "bk_host_id": 6731178,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 88,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {
            "max": 30000,
            "min": 20000
          },
          "name": "4c_16g_200g",
          "count": 3,
          "device_class": [
            "S5t.2XLARGE16",
            "S5.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 200,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.152.248.20",
        "port": 30000,
        "instance": "11.152.248.20:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14124580,
        "bk_host_id": 6731179,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 88,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {
            "max": 30000,
            "min": 20000
          },
          "name": "4c_16g_200g",
          "count": 3,
          "device_class": [
            "S5t.2XLARGE16",
            "S5.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 200,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 3,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 125,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "luketest02",
    "cluster_alias": "luketest02",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "TwemproxyRedisInstance",
    "cluster_type_name": "TendisCache集群",
    "master_domain": "cache.luketest02.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "cache.luketest02.k8stest.db",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "clb",
        "entry": "30.187.22.203",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Redis-6",
    "region": "上海",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "lukexwang",
    "updater": "lukexwang",
    "create_at": "2023-12-11T10:59:48+08:00",
    "update_at": "2024-06-11T14:34:51+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "",
      "spec_id": 75,
      "spec_name": "4c_32g_300gb",
      "spec_cluster_type": "TwemproxyRedisInstance",
      "spec_machine_type": "tendiscache",
      "cpu": {
        "max": 8,
        "min": 4
      },
      "mem": {
        "max": 32,
        "min": 30
      },
      "device_class": [
        "S5.2XLARGE32",
        "S5.4XLARGE32",
        "S5t.2XLARGE32"
      ],
      "storage_spec": [
        {
          "size": 300,
          "type": "ALL",
          "mount_point": "/data"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {}
    },
    "cluster_capacity": 31,
    "dns_to_clb": true,
    "proxy": [
      {
        "name": "",
        "ip": "11.147.95.165",
        "port": 50000,
        "instance": "11.147.95.165:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956990,
        "bk_host_id": 3142790,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "11.147.94.32",
        "port": 50000,
        "instance": "11.147.94.32:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956989,
        "bk_host_id": 3142786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "30.183.21.64",
        "port": 50000,
        "instance": "30.183.21.64:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13974776,
        "bk_host_id": 5647294,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "30.160.42.132",
        "port": 30000,
        "instance": "30.160.42.132:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956976,
        "bk_host_id": 3045786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.160.42.132",
        "port": 30001,
        "instance": "30.160.42.132:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956975,
        "bk_host_id": 3045786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.160.42.132",
        "port": 30002,
        "instance": "30.160.42.132:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956974,
        "bk_host_id": 3045786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.160.42.132",
        "port": 30003,
        "instance": "30.160.42.132:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956973,
        "bk_host_id": 3045786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.160.42.132",
        "port": 30004,
        "instance": "30.160.42.132:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956972,
        "bk_host_id": 3045786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.160.42.132",
        "port": 30005,
        "instance": "30.160.42.132:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956971,
        "bk_host_id": 3045786,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "9.140.242.250",
        "port": 30000,
        "instance": "9.140.242.250:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956982,
        "bk_host_id": 3484947,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.242.250",
        "port": 30001,
        "instance": "9.140.242.250:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956981,
        "bk_host_id": 3484947,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.242.250",
        "port": 30002,
        "instance": "9.140.242.250:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956980,
        "bk_host_id": 3484947,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.242.250",
        "port": 30003,
        "instance": "9.140.242.250:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956979,
        "bk_host_id": 3484947,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.242.250",
        "port": 30004,
        "instance": "9.140.242.250:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956978,
        "bk_host_id": 3484947,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.242.250",
        "port": 30005,
        "instance": "9.140.242.250:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13956977,
        "bk_host_id": 3484947,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 75,
          "cpu": {
            "max": 8,
            "min": 4
          },
          "mem": {
            "max": 32,
            "min": 30
          },
          "qps": {},
          "name": "4c_32g_300gb",
          "count": 1,
          "device_class": [
            "S5.2XLARGE32",
            "S5.4XLARGE32",
            "S5t.2XLARGE32"
          ],
          "storage_spec": [
            {
              "size": 300,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 6,
    "machine_pair_cnt": 1,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21002185,
    "phase": "offline",
    "phase_name": "禁用",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "newwzryonlinefeature",
    "cluster_alias": "dmc-newwzryonlinefeature",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "PredixyTendisplusCluster",
    "cluster_type_name": "Tendisplus存储版集群",
    "master_domain": "tendisplus.newwzryonlinefeature.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "tendisplus.newwzryonlinefeature.k8stest.db",
        "role": "proxy_entry"
      },
      {
        "cluster_entry_type": "dns",
        "entry": "nodes.tendisplus.newwzryonlinefeature.k8stest.db",
        "role": "node_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Tendisplus-2.7",
    "region": "上海",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "vitoxie",
    "updater": "",
    "create_at": "2024-07-31T10:18:20+08:00",
    "update_at": "2024-07-31T16:51:37+08:00",
    "cluster_spec": {
      "creator": "admin",
      "updater": "lukexwang",
      "spec_id": 90,
      "spec_name": "16c_64g_1.5tb",
      "spec_cluster_type": "PredixyTendisplusCluster",
      "spec_machine_type": "tendisplus",
      "cpu": {
        "max": 16,
        "min": 16
      },
      "mem": {
        "max": 66,
        "min": 53
      },
      "device_class": [
        "IT5.4XLARGE64",
        "I6t.4XLARGE56"
      ],
      "storage_spec": [
        {
          "size": 1500,
          "type": "ALL",
          "mount_point": "/data"
        },
        {
          "size": 1500,
          "type": "SSD",
          "mount_point": "/data1"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 80000,
        "min": 50000
      }
    },
    "cluster_capacity": 4500,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "21.25.28.212",
        "port": 50000,
        "instance": "21.25.28.212:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144921,
        "bk_host_id": 6303953,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.29.226.141",
        "port": 50000,
        "instance": "21.29.226.141:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144922,
        "bk_host_id": 6303915,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.25.29.192",
        "port": 50000,
        "instance": "21.25.29.192:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144930,
        "bk_host_id": 6303955,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "11.154.104.200",
        "port": 50000,
        "instance": "11.154.104.200:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144927,
        "bk_host_id": 6303963,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.29.226.72",
        "port": 50000,
        "instance": "21.29.226.72:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144932,
        "bk_host_id": 6303918,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "30.42.253.63",
        "port": 50000,
        "instance": "30.42.253.63:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144934,
        "bk_host_id": 2861156,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.25.28.186",
        "port": 50000,
        "instance": "21.25.28.186:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144928,
        "bk_host_id": 6303954,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.25.29.120",
        "port": 50000,
        "instance": "21.25.29.120:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144929,
        "bk_host_id": 6303956,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.29.226.118",
        "port": 50000,
        "instance": "21.29.226.118:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144931,
        "bk_host_id": 6303916,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "21.29.226.94",
        "port": 50000,
        "instance": "21.29.226.94:50000",
        "status": "unavailable",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144933,
        "bk_host_id": 6303921,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 8,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "21.29.188.139",
        "port": 30001,
        "instance": "21.29.188.139:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144910,
        "bk_host_id": 6690502,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.29.188.139",
        "port": 30002,
        "instance": "21.29.188.139:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144911,
        "bk_host_id": 6690502,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.29.188.139",
        "port": 30003,
        "instance": "21.29.188.139:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144912,
        "bk_host_id": 6690502,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.204.1",
        "port": 30000,
        "instance": "9.140.204.1:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144917,
        "bk_host_id": 3154088,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.204.1",
        "port": 30001,
        "instance": "9.140.204.1:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144918,
        "bk_host_id": 3154088,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.204.1",
        "port": 30002,
        "instance": "9.140.204.1:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144919,
        "bk_host_id": 3154088,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.204.1",
        "port": 30003,
        "instance": "9.140.204.1:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144920,
        "bk_host_id": 3154088,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.193.40",
        "port": 30000,
        "instance": "9.140.193.40:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144913,
        "bk_host_id": 3154085,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.193.40",
        "port": 30001,
        "instance": "9.140.193.40:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144914,
        "bk_host_id": 3154085,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.193.40",
        "port": 30002,
        "instance": "9.140.193.40:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144915,
        "bk_host_id": 3154085,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.193.40",
        "port": 30003,
        "instance": "9.140.193.40:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144916,
        "bk_host_id": 3154085,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.29.188.139",
        "port": 30000,
        "instance": "21.29.188.139:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144909,
        "bk_host_id": 6690502,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "30.168.0.253",
        "port": 30000,
        "instance": "30.168.0.253:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144897,
        "bk_host_id": 6691478,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.253",
        "port": 30001,
        "instance": "30.168.0.253:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144898,
        "bk_host_id": 6691478,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.253",
        "port": 30002,
        "instance": "30.168.0.253:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144899,
        "bk_host_id": 6691478,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.253",
        "port": 30003,
        "instance": "30.168.0.253:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144900,
        "bk_host_id": 6691478,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.198",
        "port": 30000,
        "instance": "30.168.0.198:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144901,
        "bk_host_id": 6691477,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.198",
        "port": 30001,
        "instance": "30.168.0.198:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144902,
        "bk_host_id": 6691477,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.198",
        "port": 30002,
        "instance": "30.168.0.198:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144903,
        "bk_host_id": 6691477,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.198",
        "port": 30003,
        "instance": "30.168.0.198:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144904,
        "bk_host_id": 6691477,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.228",
        "port": 30000,
        "instance": "30.168.0.228:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144905,
        "bk_host_id": 6691479,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.228",
        "port": 30001,
        "instance": "30.168.0.228:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144906,
        "bk_host_id": 6691479,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.228",
        "port": 30002,
        "instance": "30.168.0.228:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144907,
        "bk_host_id": 6691479,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "30.168.0.228",
        "port": 30003,
        "instance": "30.168.0.228:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14144908,
        "bk_host_id": 6691479,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 12,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 103,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [
      {
        "operator": "takenliu",
        "cluster_id": 103,
        "flow_id": 3735,
        "ticket_id": 1279,
        "ticket_type": "REDIS_CLUSTER_DATA_COPY",
        "title": "Redis 集群数据复制",
        "status": "RUNNING"
      }
    ],
    "cluster_time_zone": "+08:00",
    "cluster_name": "shstress",
    "cluster_alias": "shstress",
    "cluster_access_port": 52027,
    "cluster_stats": {},
    "cluster_type": "TwemproxyTendisSSDInstance",
    "cluster_type_name": "TendisSSD集群",
    "master_domain": "ssd2027.shstress.redistest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "ssd2027.shstress.redistest.db",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "clb",
        "entry": "30.187.21.141",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "clbDns",
        "entry": "clb.ssd2027.shstress.redistest.db",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "polaris",
        "entry": "polaris.ssd2027.shstress.redistest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "TendisSSD-1.2",
    "region": "上海",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "cyckercai",
    "updater": "cyckercai",
    "create_at": "2023-11-30T17:17:48+08:00",
    "update_at": "2023-11-30T17:17:48+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "",
      "spec_id": 81,
      "spec_name": "16c_64g_1.5tb",
      "spec_cluster_type": "TwemproxyTendisSSDInstance",
      "spec_machine_type": "tendisssd",
      "cpu": {
        "max": 16,
        "min": 16
      },
      "mem": {
        "max": 66,
        "min": 55
      },
      "device_class": [
        "IT5.4XLARGE64",
        "I6t.4XLARGE56"
      ],
      "storage_spec": [
        {
          "size": 1500,
          "type": "ALL",
          "mount_point": "/data"
        },
        {
          "size": 1500,
          "type": "SSD",
          "mount_point": "/data1"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 70000,
        "min": 50000
      }
    },
    "cluster_capacity": 1500,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "11.159.223.72",
        "port": 52027,
        "instance": "11.159.223.72:52027",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948450,
        "bk_host_id": 1875341,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 83,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53027
      },
      {
        "name": "",
        "ip": "9.140.137.27",
        "port": 52027,
        "instance": "9.140.137.27:52027",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948446,
        "bk_host_id": 3697611,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 83,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53027
      },
      {
        "name": "",
        "ip": "9.140.189.174",
        "port": 52027,
        "instance": "9.140.189.174:52027",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948445,
        "bk_host_id": 3701759,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 83,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 53027
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30000,
        "instance": "9.140.186.90:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948477,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30001,
        "instance": "9.140.186.90:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948475,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30002,
        "instance": "9.140.186.90:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948474,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30003,
        "instance": "9.140.186.90:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948472,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30004,
        "instance": "9.140.186.90:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948470,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30005,
        "instance": "9.140.186.90:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948468,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30006,
        "instance": "9.140.186.90:30006",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948466,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30007,
        "instance": "9.140.186.90:30007",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948464,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30008,
        "instance": "9.140.186.90:30008",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948462,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30009,
        "instance": "9.140.186.90:30009",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948460,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30010,
        "instance": "9.140.186.90:30010",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948458,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.140.186.90",
        "port": 30011,
        "instance": "9.140.186.90:30011",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948456,
        "bk_host_id": 4819188,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30011,
        "instance": "9.143.122.177:30011",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948481,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30010,
        "instance": "9.143.122.177:30010",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948483,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30009,
        "instance": "9.143.122.177:30009",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948485,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30008,
        "instance": "9.143.122.177:30008",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948487,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30007,
        "instance": "9.143.122.177:30007",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948489,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30006,
        "instance": "9.143.122.177:30006",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948491,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30005,
        "instance": "9.143.122.177:30005",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948493,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30004,
        "instance": "9.143.122.177:30004",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948495,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30003,
        "instance": "9.143.122.177:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948496,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30002,
        "instance": "9.143.122.177:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948498,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30001,
        "instance": "9.143.122.177:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948500,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.143.122.177",
        "port": 30000,
        "instance": "9.143.122.177:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13948502,
        "bk_host_id": 4819196,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 81,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 55
          },
          "qps": {
            "max": 70000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 12,
    "machine_pair_cnt": 1,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 139,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "takentest",
    "cluster_alias": "taken",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "PredixyTendisplusCluster",
    "cluster_type_name": "Tendisplus存储版集群",
    "master_domain": "tendisplus.takentest.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "tendisplus.takentest.k8stest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Tendisplus-2.7",
    "region": "上海",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "takenliu",
    "updater": "",
    "create_at": "2023-12-22T11:20:15+08:00",
    "update_at": "2023-12-22T11:20:15+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "lukexwang",
      "spec_id": 86,
      "spec_name": "2c_4g_50g",
      "spec_cluster_type": "PredixyTendisplusCluster",
      "spec_machine_type": "tendisplus",
      "cpu": {
        "max": 2,
        "min": 2
      },
      "mem": {
        "max": 4,
        "min": 3
      },
      "device_class": [
        "S5.MEDIUM4",
        "S5t.MEDIUM4",
        "SA2.MEDIUM4"
      ],
      "storage_spec": [
        {
          "size": 50,
          "type": "ALL",
          "mount_point": "/data"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 10000,
        "min": 5000
      }
    },
    "cluster_capacity": 75,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "11.147.95.243",
        "port": 50000,
        "instance": "11.147.95.243:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13957933,
        "bk_host_id": 3142788,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "30.42.247.144",
        "port": 50000,
        "instance": "30.42.247.144:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13957932,
        "bk_host_id": 3165021,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "30.183.21.116",
        "port": 30000,
        "instance": "30.183.21.116:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13957927,
        "bk_host_id": 5647292,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.150.98.209",
        "port": 30000,
        "instance": "11.150.98.209:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13974801,
        "bk_host_id": 1867901,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.180.178.251",
        "port": 30000,
        "instance": "11.180.178.251:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13994172,
        "bk_host_id": 1751667,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "9.140.136.130",
        "port": 30000,
        "instance": "9.140.136.130:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13957931,
        "bk_host_id": 3697447,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.154.109.213",
        "port": 30000,
        "instance": "11.154.109.213:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13957930,
        "bk_host_id": 1803472,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.159.223.101",
        "port": 30000,
        "instance": "11.159.223.101:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 13957929,
        "bk_host_id": 1875342,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 3,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21000995,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "tendisplus-new-release-performance-t",
    "cluster_alias": "tendisplus新版本发布性能测试",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "PredixyTendisplusCluster",
    "cluster_type_name": "Tendisplus存储版集群",
    "master_domain": "tendisplus.tendisplus-new-release-performance-test.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "tendisplus.tendisplus-new-release-performance-test.k8stest.db",
        "role": "proxy_entry"
      },
      {
        "cluster_entry_type": "dns",
        "entry": "nodes.tendisplus.tendisplus-new-release-performance-test.k8stest.db",
        "role": "node_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Tendisplus-2.7",
    "region": "南京",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "raffertyyu",
    "updater": "",
    "create_at": "2024-05-10T17:30:19+08:00",
    "update_at": "2024-05-10T17:30:19+08:00",
    "cluster_spec": {
      "creator": "admin",
      "updater": "lukexwang",
      "spec_id": 90,
      "spec_name": "16c_64g_1.5tb",
      "spec_cluster_type": "PredixyTendisplusCluster",
      "spec_machine_type": "tendisplus",
      "cpu": {
        "max": 16,
        "min": 16
      },
      "mem": {
        "max": 66,
        "min": 53
      },
      "device_class": [
        "IT5.4XLARGE64",
        "I6t.4XLARGE56"
      ],
      "storage_spec": [
        {
          "size": 1500,
          "type": "ALL",
          "mount_point": "/data"
        },
        {
          "size": 1500,
          "type": "SSD",
          "mount_point": "/data1"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 80000,
        "min": 50000
      }
    },
    "cluster_capacity": 4500,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "11.186.92.225",
        "port": 50000,
        "instance": "11.186.92.225:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060470,
        "bk_host_id": 5820626,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 93,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {},
          "name": "4c_16g_50g",
          "count": 3,
          "device_class": [
            "S5.2XLARGE16",
            "S5.LARGE16",
            "S5t.2XLARGE16",
            "S5t.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "9.219.83.186",
        "port": 50000,
        "instance": "9.219.83.186:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060472,
        "bk_host_id": 6241143,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 93,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {},
          "name": "4c_16g_50g",
          "count": 3,
          "device_class": [
            "S5.2XLARGE16",
            "S5.LARGE16",
            "S5t.2XLARGE16",
            "S5t.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "11.186.93.57",
        "port": 50000,
        "instance": "11.186.93.57:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060471,
        "bk_host_id": 5820624,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 93,
          "cpu": {
            "max": 6,
            "min": 4
          },
          "mem": {
            "max": 16,
            "min": 15
          },
          "qps": {},
          "name": "4c_16g_50g",
          "count": 3,
          "device_class": [
            "S5.2XLARGE16",
            "S5.LARGE16",
            "S5t.2XLARGE16",
            "S5t.LARGE16",
            "SA2.2XLARGE16",
            "SA3.LARGE16"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "11.187.76.207",
        "port": 30000,
        "instance": "11.187.76.207:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060469,
        "bk_host_id": 6632081,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.187.77.173",
        "port": 30000,
        "instance": "11.187.77.173:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060468,
        "bk_host_id": 6632080,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.187.77.123",
        "port": 30000,
        "instance": "11.187.77.123:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060467,
        "bk_host_id": 6632082,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "11.186.71.106",
        "port": 30000,
        "instance": "11.186.71.106:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060464,
        "bk_host_id": 6632085,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.186.69.123",
        "port": 30000,
        "instance": "11.186.69.123:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060465,
        "bk_host_id": 6632083,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.186.68.192",
        "port": 30000,
        "instance": "11.186.68.192:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14060466,
        "bk_host_id": 6632084,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 3,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21001752,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "vitocc",
    "cluster_alias": "vitocc",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "TwemproxyRedisInstance",
    "cluster_type_name": "TendisCache集群",
    "master_domain": "cache.vitocc.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "cache.vitocc.k8stest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Redis-6",
    "region": "深圳",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "vitoxie",
    "updater": "vitoxie",
    "create_at": "2024-06-07T11:17:42+08:00",
    "update_at": "2024-06-07T11:17:42+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "",
      "spec_id": 72,
      "spec_name": "2c_4g_50gb",
      "spec_cluster_type": "TwemproxyRedisInstance",
      "spec_machine_type": "tendiscache",
      "cpu": {
        "max": 2,
        "min": 2
      },
      "mem": {
        "max": 4,
        "min": 3
      },
      "device_class": [
        "SA2.MEDIUM4",
        "S5.MEDIUM4",
        "S5t.MEDIUM4"
      ],
      "storage_spec": [],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {}
    },
    "cluster_capacity": 3.5,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "9.146.105.186",
        "port": 50000,
        "instance": "9.146.105.186:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083973,
        "bk_host_id": 6617245,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "9.143.126.68",
        "port": 50000,
        "instance": "9.143.126.68:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14083996,
        "bk_host_id": 3465699,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 78,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "SA2.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "11.177.152.32",
        "port": 30000,
        "instance": "11.177.152.32:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084283,
        "bk_host_id": 4873332,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.177.152.32",
        "port": 30001,
        "instance": "11.177.152.32:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084284,
        "bk_host_id": 4873332,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.177.152.32",
        "port": 30002,
        "instance": "11.177.152.32:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084285,
        "bk_host_id": 4873332,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.177.152.32",
        "port": 30003,
        "instance": "11.177.152.32:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084286,
        "bk_host_id": 4873332,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "9.146.108.14",
        "port": 30001,
        "instance": "9.146.108.14:30001",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084288,
        "bk_host_id": 6617244,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.146.108.14",
        "port": 30002,
        "instance": "9.146.108.14:30002",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084289,
        "bk_host_id": 6617244,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.146.108.14",
        "port": 30003,
        "instance": "9.146.108.14:30003",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084290,
        "bk_host_id": 6617244,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.146.108.14",
        "port": 30000,
        "instance": "9.146.108.14:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14084287,
        "bk_host_id": 6617244,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 72,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50gb",
          "count": 1,
          "device_class": [
            "SA2.MEDIUM4",
            "S5.MEDIUM4",
            "S5t.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 4,
    "machine_pair_cnt": 1,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21002114,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "vitotest",
    "cluster_alias": "vitotestmigrate",
    "cluster_access_port": 50505,
    "cluster_stats": {},
    "cluster_type": "PredixyTendisplusCluster",
    "cluster_type_name": "Tendisplus存储版集群",
    "master_domain": "tendisx.vitotest.redistest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "tendisx.vitotest.redistest.db",
        "role": "proxy_entry"
      },
      {
        "cluster_entry_type": "dns",
        "entry": "nodes.tendisx.vitotest.redistest.db",
        "role": "node_entry"
      },
      {
        "cluster_entry_type": "polaris",
        "entry": "polaris.tendisx.vitotest.redistest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Tendisplus-2.7",
    "region": "南京",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "lukexwang",
    "updater": "",
    "create_at": "2024-07-17T17:51:35+08:00",
    "update_at": "2024-07-17T17:51:35+08:00",
    "cluster_spec": {
      "creator": "",
      "updater": "lukexwang",
      "spec_id": 86,
      "spec_name": "2c_4g_50g",
      "spec_cluster_type": "PredixyTendisplusCluster",
      "spec_machine_type": "tendisplus",
      "cpu": {
        "max": 2,
        "min": 2
      },
      "mem": {
        "max": 4,
        "min": 3
      },
      "device_class": [
        "S5.MEDIUM4",
        "S5t.MEDIUM4",
        "SA2.MEDIUM4"
      ],
      "storage_spec": [
        {
          "size": 50,
          "type": "ALL",
          "mount_point": "/data"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 10000,
        "min": 5000
      }
    },
    "cluster_capacity": 75,
    "dns_to_clb": false,
    "proxy": [
      {
        "name": "",
        "ip": "21.35.24.47",
        "port": 50505,
        "instance": "21.35.24.47:50505",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128313,
        "bk_host_id": 6422226,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51505
      },
      {
        "name": "",
        "ip": "21.35.71.213",
        "port": 50505,
        "instance": "21.35.71.213:50505",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128314,
        "bk_host_id": 6423933,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 2,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51505
      },
      {
        "name": "",
        "ip": "21.35.65.96",
        "port": 50505,
        "instance": "21.35.65.96:50505",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128315,
        "bk_host_id": 6420018,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 1,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51505
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "21.35.7.116",
        "port": 30000,
        "instance": "21.35.7.116:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128307,
        "bk_host_id": 6407356,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.35.22.51",
        "port": 30000,
        "instance": "21.35.22.51:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128308,
        "bk_host_id": 6416753,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.161.221.164",
        "port": 30000,
        "instance": "11.161.221.164:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128309,
        "bk_host_id": 2239553,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "21.35.7.50",
        "port": 30000,
        "instance": "21.35.7.50:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128310,
        "bk_host_id": 6407355,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.35.30.21",
        "port": 30000,
        "instance": "21.35.30.21:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128311,
        "bk_host_id": 6423679,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "21.35.20.142",
        "port": 30000,
        "instance": "21.35.20.142:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14128312,
        "bk_host_id": 6416752,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 86,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {
            "max": 10000,
            "min": 5000
          },
          "name": "2c_4g_50g",
          "count": 3,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 3,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  },
  {
    "id": 21001923,
    "phase": "online",
    "phase_name": "正常",
    "status": "normal",
    "operations": [],
    "cluster_time_zone": "+08:00",
    "cluster_name": "xrtest",
    "cluster_alias": "xr业务测试",
    "cluster_access_port": 50000,
    "cluster_stats": {},
    "cluster_type": "PredixyTendisplusCluster",
    "cluster_type_name": "Tendisplus存储版集群",
    "master_domain": "tendisplus.xrtest.k8stest.db",
    "slave_domain": "",
    "cluster_entry": [
      {
        "cluster_entry_type": "dns",
        "entry": "tendisplus.xrtest.k8stest.db",
        "role": "proxy_entry"
      },
      {
        "cluster_entry_type": "dns",
        "entry": "nodes.tendisplus.xrtest.k8stest.db",
        "role": "node_entry"
      },
      {
        "cluster_entry_type": "clb",
        "entry": "21.26.57.151",
        "role": "master_entry"
      },
      {
        "cluster_entry_type": "clbDns",
        "entry": "clb.tendisplus.xrtest.k8stest.db",
        "role": "master_entry"
      }
    ],
    "bk_biz_id": 100706,
    "bk_biz_name": "k8stest",
    "bk_cloud_id": 0,
    "bk_cloud_name": "直连区域",
    "major_version": "Tendisplus-2.7",
    "region": "深圳",
    "db_module_name": "",
    "db_module_id": 0,
    "creator": "lukexwang",
    "updater": "",
    "create_at": "2024-06-20T16:03:51+08:00",
    "update_at": "2024-06-20T16:03:51+08:00",
    "cluster_spec": {
      "creator": "admin",
      "updater": "lukexwang",
      "spec_id": 90,
      "spec_name": "16c_64g_1.5tb",
      "spec_cluster_type": "PredixyTendisplusCluster",
      "spec_machine_type": "tendisplus",
      "cpu": {
        "max": 16,
        "min": 16
      },
      "mem": {
        "max": 66,
        "min": 53
      },
      "device_class": [
        "IT5.4XLARGE64",
        "I6t.4XLARGE56"
      ],
      "storage_spec": [
        {
          "size": 1500,
          "type": "ALL",
          "mount_point": "/data"
        },
        {
          "size": 1500,
          "type": "SSD",
          "mount_point": "/data1"
        }
      ],
      "desc": "",
      "enable": true,
      "instance_num": 0,
      "qps": {
        "max": 80000,
        "min": 50000
      }
    },
    "cluster_capacity": 4500,
    "dns_to_clb": true,
    "proxy": [
      {
        "name": "",
        "ip": "11.154.201.198",
        "port": 50000,
        "instance": "11.154.201.198:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096497,
        "bk_host_id": 2843291,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 4,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "9.146.123.134",
        "port": 50000,
        "instance": "9.146.123.134:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096496,
        "bk_host_id": 3154857,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 4,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "9.146.110.97",
        "port": 50000,
        "instance": "9.146.110.97:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096495,
        "bk_host_id": 3436653,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 4,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      },
      {
        "name": "",
        "ip": "30.42.140.64",
        "port": 50000,
        "instance": "30.42.140.64:50000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096498,
        "bk_host_id": 3181254,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 92,
          "cpu": {
            "max": 2,
            "min": 2
          },
          "mem": {
            "max": 4,
            "min": 3
          },
          "qps": {},
          "name": "2c_4g_50g",
          "count": 4,
          "device_class": [
            "S5.MEDIUM4",
            "S5t.MEDIUM4",
            "SA2.MEDIUM4"
          ],
          "storage_spec": [
            {
              "size": 50,
              "type": "ALL",
              "mount_point": "/data"
            }
          ]
        },
        "bk_biz_id": 100706,
        "admin_port": 51000
      }
    ],
    "redis_master": [
      {
        "name": "",
        "ip": "11.154.167.129",
        "port": 30000,
        "instance": "11.154.167.129:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096493,
        "bk_host_id": 6780429,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.154.166.156",
        "port": 30000,
        "instance": "11.154.166.156:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096492,
        "bk_host_id": 6780431,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "11.154.166.130",
        "port": 30000,
        "instance": "11.154.166.130:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096494,
        "bk_host_id": 6780427,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "redis_slave": [
      {
        "name": "",
        "ip": "9.146.111.1",
        "port": 30000,
        "instance": "9.146.111.1:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096489,
        "bk_host_id": 6780467,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.146.108.119",
        "port": 30000,
        "instance": "9.146.108.119:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096490,
        "bk_host_id": 6780463,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      },
      {
        "name": "",
        "ip": "9.146.105.229",
        "port": 30000,
        "instance": "9.146.105.229:30000",
        "status": "running",
        "version": "",
        "phase": "online",
        "bk_instance_id": 14096491,
        "bk_host_id": 6780460,
        "bk_cloud_id": 0,
        "spec_config": {
          "id": 90,
          "cpu": {
            "max": 16,
            "min": 16
          },
          "mem": {
            "max": 66,
            "min": 53
          },
          "qps": {
            "max": 80000,
            "min": 50000
          },
          "name": "16c_64g_1.5tb",
          "count": 3,
          "device_class": [
            "IT5.4XLARGE64",
            "I6t.4XLARGE56"
          ],
          "storage_spec": [
            {
              "size": 1500,
              "type": "ALL",
              "mount_point": "/data"
            },
            {
              "size": 1500,
              "type": "SSD",
              "mount_point": "/data1"
            }
          ]
        },
        "bk_biz_id": 100706
      }
    ],
    "cluster_shard_num": 3,
    "machine_pair_cnt": 3,
    "permission": {
      "redis_keys_delete": true,
      "redis_keys_extract": true,
      "redis_plugin_create_clb": true,
      "redis_plugin_dns_bind_clb": true,
      "redis_plugin_create_polaris": true,
      "redis_destroy": true,
      "redis_open_close": true,
      "redis_purge": true,
      "redis_view": true,
      "redis_backup": true,
      "redis_access_entry_view": true
    }
  }
])

  const columns = computed(() => [
    {
      label: 'ID',
      field: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      label: '访问入口',
      field: 'master_domain',
      width: 280,
      minWidth: 280,
      fixed: 'left',
    },
    {
      label: '集群名称',
      field: 'cluster_name',
      minWidth: 200,
      showOverflowTooltip: false,
    },
    {
      label: '管控区域',
      field: 'bk_cloud_id',
      render: ({ data }: any) => <span>{data.bk_cloud_name ?? '--'}</span>,
    },
    {
      label: 'Proxy',
      field: 'proxy',
      width: 180,
      minWidth: 180,
      showOverflowTooltip: false,
      render: ({ data }: any) => (
        data.proxy.map(item => <div>{item.ip}</div>)
      ),
    },
    {
      label: 'Master',
      field: 'redis_master',
      width: 180,
      minWidth: 180,
      showOverflowTooltip: false,
      render: ({ data }: any) => (
        data.redis_master.map(item => <div>{item.ip}</div>)
      ),
    },
    {
      label: 'Slave',
      field: 'redis_slave',
      width: 180,
      minWidth: 180,
      showOverflowTooltip: false,
      render: ({ data }: any) => (
        data.redis_slave.map(item => <div>{item.ip}</div>)
      ),
    },
    {
      label: '架构版本',
      field: 'cluster_type',
      minWidth: 160,
      render: ({ data }: any) => <span>{data.cluster_type_name || '--'}</span>,
    },
    {
      label: '版本',
      field: 'major_version',
      minWidth: 100,
      render: ({ cell }: any) => <span>{cell || '--'}</span>,
    },
    {
      label: '地域',
      field: 'region',
      minWidth: 100,
      render: ({ cell }: any) => <span>{cell || '--'}</span>,
    },
    {
      label: '更新人',
      field: 'updater',
      width: 140,
      render: ({ cell }: any) => <span>{cell || '--'}</span>,
    },
    {
      label: '更新时间',
      field: 'update_at',
      width: 160,
      render: ({ data }: any) => <span>{data.updateAtDisplay || '--'}</span>,
    },
    {
      label: '创建人',
      field: 'creator',
      width: 140,
      render: ({ cell }: any) => <span>{cell || '--'}</span>,
    },
    {
      label: '部署时间',
      field: 'create_at',
      sort: true,
      width: 160,
      render: ({ data }: any) => <span>{data.create_at || '--'}</span>,
    },
    {
      label: '时区',
      field: 'cluster_time_zone',
      width: 100,
      render: ({ cell }: any) => <span>{cell || '--'}</span>,
    },
    {
      label: '操作',
      field: '',
      width: 200,
      fixed:  'right',
      render: ({ data }: any) => {
        const getOperations = (theme = 'primary') => {
          const baseOperations = [
              <bk-button
                text>
                { '备份' }
              </bk-button>,
              <bk-button
                text>
                { '清档' }
              </bk-button>,
          ];
          if (data.bk_cloud_id > 0) {
            return [
                <bk-button
                  text>
                  {'提取Key'}
                </bk-button>,
                <bk-button
                  action-id="redis_keys_delete"
                  resource={data.id}
                  permission={data.permission.redis_keys_delete}
                  text
                  theme={theme}
                  disabled>
                  { '删除Key'}
                </bk-button>,
              ...baseOperations,
            ];
          }
          return [
              <bk-button
                text>
                {'提取Key'}
              </bk-button>,
              <bk-button
                text>
                { '删除Key' }
              </bk-button>,
            ...baseOperations,
          ];
        };

        return (
            <div class="operations">
              {getOperations()}
            </div>
        );
      },
    },
  ]);

  // 设置用户个人表头信息
  const defaultSettings = {
    fields: (columns.value || []).filter(item => item.field).map(item => ({
      label: item.label as string,
      field: item.field as string,
      disabled: ['master_domain'].includes(item.field as string),
    })),
    checked: [
      'master_domain',
      'status',
      'cluster_stats',
      'proxy',
      'redis_master',
      'redis_slave',
      'cluster_type_name',
      'major_version',
      'region',
    ],
    showLineHeight: false,
    trigger: 'manual' as const,
  };

  const calcRowHeight = (data: {
    type: string,
    index: number,
  }) => {
    const { type, index } = data;
    console.log('data>>>', data);

    const row = dataList[index ?? 0];
    const maxLen = Math.max(...[
      row.proxy.length,
      row.redis_master.length,
      row.redis_slave.length,
    ]);

    console.log('height>>>', maxLen * 20 + 18)
    return maxLen * 20 + 18;
  }

</script>

<style lang="less" scoped>
  .redis-cluster-list-page {
    height: 100%;
    padding: 24px 0;
    margin: 0 24px;

    .operation-box {
      display: flex;
      flex-wrap: wrap;

      .bk-search-select {
        flex: 1;
        max-width: 500px;
        min-width: 320px;
        margin-left: auto;
      }

      .cluster-dropdown {
        margin-right: auto;

        .cluster-dropdown-icon {
          // color: @gray-color;
          transform: rotate(0);
          transition: all 0.2s;
        }

        .cluster-dropdown-icon-active {
          transform: rotate(-90deg);
        }
      }
    }

    .table-wrapper-out {
      flex: 1;
      overflow: hidden;

      .table-wrapper {
        background-color: white;

        .bk-table {
          height: 100% !important;
        }

        :deep(td .cell) {
          line-height: unset !important;

          .db-icon-copy,
          .db-icon-edit {
            display: none;
            margin-top: 1px;
            margin-left: 4px;
            // color: @primary-color;
            cursor: pointer;
          }
        }

        :deep(.cluster-name-container) {
          display: flex;
          align-items: flex-start;
          padding: 8px 0;
          overflow: hidden;

          .cluster-name {
            line-height: 16px;

            &__alias {
              // color: @light-gray;
            }
          }

          .cluster-tags {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-left: 4px;
          }

          .cluster-tag {
            flex-shrink: 0;
            margin: 2px;
          }
        }

        :deep(.ip-list) {
          padding: 8px 0;

          &__more {
            display: inline-block;
            margin-top: 2px;
          }
        }

        :deep(.operations) {
          .bk-button {
            margin-right: 8px;
          }

          &__more {
            .db-icon-more {
              font-size: 16px;
              cursor: pointer;

              &:hover {
                border-radius: 2px;
              }
            }
          }
        }

        :deep(th:hover),
        :deep(td:hover) {
          .db-icon-copy,
          .db-icon-edit {
            display: inline-block;
          }
        }

        :deep(.is-offline) {
          .cluster-name-container {
            .cluster-name {
              a {
              }

              &__alias {
              }
            }
          }

          .cell {
          }
        }

        :deep(.bk-table-body) {
          max-height: calc(100% - 100px);
        }
      }
    }
  }
</style>

<style lang="less">
  .redis-manage-clb-minitag {
    color: #8e3aff;
    cursor: pointer;
    background-color: #f2edff;

    &:hover {
      color: #8e3aff;
      background-color: #e3d9fe;
    }
  }

  .redis-manage-polary-minitag {
    color: #3a84ff;
    cursor: pointer;
    background-color: #edf4ff;

    &:hover {
      color: #3a84ff;
      background-color: #e1ecff;
    }
  }
</style>
