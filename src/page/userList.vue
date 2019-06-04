L<template>
    <div class="box">
       <div class="table_container">
           <!-- highlight-current-row:当前行高亮 -->
           <el-table
                v-loading="loading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="#fff"
                :data="tabledata"
                style="width: 100%"
                highlight-current-row>
                <el-table-column type="index" width="100"></el-table-column>
                <el-table-column label="用户姓名" prop='username' width="150"></el-table-column>
                <el-table-column label="用户邮箱" prop='email' width="200"></el-table-column>
                <el-table-column label="注册地址" prop='address' width="200"></el-table-column>
                <el-table-column label="注册日期" prop='data'></el-table-column>
                <el-table-column label="用户性别" prop='sex'></el-table-column>
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
export default {
    data(){
        return {
            tabledata:[],
            size:8,
        }
    },
    methods:{
        getuserList(){
            const self = this;
            self.$http.post('/api/user/userList',{})
            .then((res)=>{
                this.tabledata = res.data;
            })
        },
        handleCurrentChange(val){
           console.log(val)
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
       setTimeout(this.getuserList,1000)
    },
}
</script>
<style lang="less">
.box{
    width: 100%;
    .table_container{
        height: 481px;
        // overflow-y: scroll;
        overflow: hidden;
        .el-table{
          border:1px solid #dfe6ec;
          border-bottom:none;
        }
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
