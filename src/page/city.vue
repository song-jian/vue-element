<template>
    <div class="box">
       sss
       <div class="excel_container">
            <el-button type="success" icon='document' size="mini" @click='exportToExcel()'>导出excel</el-button>
       </div>
       <div class="table_container">
           <!-- highlight-current-row:当前行高亮 -->
           <el-table
                v-loading="loading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="#fff"
                :data="tabledata"
                style="width: 100%"
                align="center"
                highlight-current-row>
                <el-table-column  width="50" label="编号" >
                   <template slot-scope="scope">
                    {{scope.$index+1}}
                   </template>
                </el-table-column>
                <el-table-column label="省份" align='center'  prop='provinces' width="100"></el-table-column>
                <el-table-column label="投资总额" align='center' prop='orderMoney' width="100"
                sortable>
                    <template slot-scope="scope">
                       <span style="color:#F42020">{{scope.row.orderMoney}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="收益金额" align='center' prop='incomeMoney' width="100" sortable>
                     <template slot-scope="scope">  
                        <span style="color:#00d053;">+{{ scope.row.incomeMoney }}</span>
                     </template> 
                </el-table-column>
                <el-table-column label="主要投资项目" align='center' prop='payType'></el-table-column>
                <el-table-column label="投资周期" align='center' prop='orderPeriod'></el-table-column>
                <el-table-column label="投资人数" align='center' prop='orderPersonConunt' :formatter="formatterOrderPersonConunt"></el-table-column>
                <el-table-column label="投资年变化率" align='center' prop='orderYearRate'></el-table-column>
                <el-table-column label="备注" align='center' prop='remarks'></el-table-column>

                <!-- <el-table-column   label='操作' width='250'>
                    <template slot-scope='scope'>
                        <el-button size="mini" @click.stop='Look(scope)'>查看</el-button>
                        <el-button type="primary" size="mini">编辑</el-button>
                        <el-button type="danger" size="mini" @click.native.prevent=Delete(scope,tabledata)>删除</el-button>
                    </template>
                </el-table-column> -->

           </el-table>
       </div>
       <div class="page_container">
          <!-- :page-sizes="[9,18]"改变每一页的页数 -->
          <el-pagination
           @current-change="handleCurrentChange"
            :current-page="1"
            :page-size="size"
            layout="total,prev, pager, next, jumper"
            :total="total">
          </el-pagination>
       </div>
    </div>
</template>
<script>
import * as fz from '../utils/fz';
export default {
    data(){
        return {
            tabledata:[],
            size:8,
        }
    },
    methods:{
         /**
         * 格式化投资人数
         */
         formatterOrderPersonConunt(item) {
            return item.orderPersonConunt+'人';
         },
        getcityList(){
            const self = this;
            self.$http.get('../../static/data/cityjson.json')
            .then((res)=>{
               this.tabledata = [],
               res.data.data.forEach(item=>{
                  const tableItem = {
                     provinces:item.provinces,
                     orderMoney:fz.toFixedNum(item.orderMoney),
                     incomeMoney:fz.toFixedNum(item.incomeMoney),
                     payType:item.payType,
                     orderPeriod:item.orderPeriod,
                     orderYearRate:item.orderYearRate,
                     orderPersonConunt:item.orderPersonConunt,
                     orderPersonAge:item.orderPersonAge,
                     remarks:item.remarks
                  }
                  this.tabledata.push(tableItem);
               })
               //  this.tabledata = res.data;
               // console.log(this.tabledata)
            })
        },
        handleCurrentChange(val){
         //   console.log(val)
        },
         exportToExcel() {
               require.ensure([], () => {
                  const {
                     export_json_to_excel
                  } = require('vendor/Export2Excel');
                  
                  const tHeader = ['省份', '投资总额', '收益总额', '主要投资项目','投资周期', '投资人数', '投资年变化率','备注'];
                  const filterVal = ['provinces', 'orderMoney', 'incomeMoney', 'payType','orderPeriod', 'orderPersonConunt', 'orderYearRate', 'remarks'];
                  const list = this.tabledata;
                  const data = this.formatJson(filterVal, list);
                  export_json_to_excel(tHeader, data, '列表excel');
               })
         },
         formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
         },
      },
     
    computed:{
        total(){
          return this.tabledata.length
        },
        loading(){
            return this.tabledata.length == 0
        }
    },
    mounted () {
       setTimeout(this.getcityList,1000)
    },
}
</script>
<style lang="less">
.box{
    width: 100%;
    .excel_container{
       margin: 10px 0 10px;
    }
    .table_container{
        height: 481px;
        // overflow-y: scroll;
        overflow: hidden;
    }
    .page_container{
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      padding-right: 10px;
    }
    .el-loading-spinner{
      top:240px;
    }
}
</style>
