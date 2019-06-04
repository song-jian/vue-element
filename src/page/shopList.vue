<template>
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
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" class="demo-table-expand">
                        <el-form-item label="店铺名称 ：">
                            <span>{{ props.row.shopname }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址 ：">
                            <span>{{ props.row.shopaddress }}</span>
                        </el-form-item>
                        <el-form-item label="店铺简介 ：">
                            <span>{{ props.row.shopnote }}</span>
                        </el-form-item>
                        <el-form-item label="店铺销量 ：">
                            <span>{{ props.row.shopsale }} 份/月</span>
                        </el-form-item>
                        <el-form-item label="店铺评分 ：">
                            <span><el-rate 
                            v-model=props.row.shopassess
                             disabled
                            show-score
                            text-color="#F42020"
                            :colors='["#F42020","#F42020","#F42020"]'
                            score-template="{value}">
                            </el-rate></span>
                        </el-form-item>
                        <el-form-item label="商品分类 ：">
                            <span>{{ props.row.shopclass}}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="店铺名称" prop='shopname' width="250"></el-table-column>
                <el-table-column label="店铺地址" prop='shopaddress' width="300"></el-table-column>
                <el-table-column label="店铺介绍" prop='shopnote' width="300"></el-table-column>
                <el-table-column   label='操作'>
                    <template slot-scope='scope'>
                        <el-button size="mini" @click.stop='Edit(scope,true)'>查看</el-button>
                        <el-button type="primary" size="mini" @click.stop='Edit(scope,false)'>编辑</el-button>
                        <el-button type="danger" size="mini" @click.native.prevent=Delete(scope,tabledata)>删除</el-button>
                    </template>
                </el-table-column>

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
       <el-dialog width="160" :visible.sync="Editvisible">
            <el-form :model="formdata" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :disabled="ifonlyread">
                <el-form-item label="店铺名称：" prop="shopname">
                    <el-input v-model="formdata.shopname"></el-input>
                </el-form-item>
                <el-form-item label="店铺地址：" prop="shopaddress">
                     <el-input v-model="formdata.shopaddress"></el-input>
                </el-form-item>
                 <el-form-item label="店铺简介：" prop="shopnote">
                     <el-input type="textarea" v-model="formdata.shopnote"></el-input>
                </el-form-item>
                <el-form-item label="店铺评分：" prop="shopassess">
                     <el-input v-model="formdata.shopassess"></el-input>
                </el-form-item>
                <el-form-item label="店铺销量：" prop="shopsale">
                     <el-input v-model="formdata.shopsale"></el-input>
                </el-form-item>
                 <el-form-item label="店铺分类：" prop="shopclass">
                     <el-input v-model="formdata.shopclass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="Cancel('ruleForm')">取 消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabledata:[],
            size:8,
            Editvisible:false,
            ifonlyread:Boolean,
            formdata:{
                shopname:'',
                shopaddress:'',
                shopnote:'',
                shopassess:'',
                shopsale:'',
                shopclass:'',
            },
            rules:{
                shopname:[
                    {required:true,message:'请输入店铺名称',triggle:'blur'},
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                shopaddress:[
                    {required:true,message:'请输入店铺地址',triggle:'blur'},
                ],
                shopnote:[
                    {required:true,message:'请输入店铺简介',triggle:'blur'},
                ],
                shopassess:[
                    {required:true,message:'评分不能为空', trigger: 'blur'},
                   
                ],
                shopsale:[
                    {required:true,message:'销量不能为空', trigger: 'blur'},
                    
                ],
                shopclass:[
                    {required:true,message:'请输入店铺分类',triggle:'blur'},
                ]
            }
        }
    },
    methods:{
        getuserList(){
            const self = this;
            self.$http.post('/api/shop/shopList',{})
            .then((res)=>{
                this.tabledata = res.data;
            })
        },
        handleCurrentChange(val){
        //    console.log(val)
        },
        Look(msg){
        //    console.log(msg.row)
        },
        Edit(msg,Bol){
            if(Bol){
                this.ifonlyread = true;
            }else{
                 this.ifonlyread = false;
            }
            this.Editvisible = true;
            for(var k in msg.row){
              this.formdata[k] = msg.row[k]
            }
            console.log(this.formdata)
        },
        Delete(scope,tabledata){
        //    console.log(scope)
        //    console.log(tabledata)
           const flag = confirm("确定删除此条数据么");
           if(flag) tabledata.splice(scope.$index,1);
           else{

           }
            // console.log(this.tabledata)//也会更新
        },
        Cancel(formName){
            this.$refs[formName].resetFields();
            this.Editvisible = false;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                // console.log(this.formdata)
            if (valid) {
                alert('submit!');
                this.Editvisible = false;
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
    },
    computed:{
        total(){
          return this.tabledata.length
        },
        loading(){
          return this.tabledata.length == 0;
        }
    },
    mounted () {
        setTimeout(this.getuserList,1000);
    },
}
</script>
<style lang="less">
.box{
    width: 100%;
    // height: 100%;
    .table_container{
        height: 481px;
        // overflow-y: scroll;
        overflow: hidden;
        .el-table{
          border:1px solid #dfe6ec;
          border-bottom:none;
          height: 481px;
          .demo-table-expand label {
                // width: 90px;
                color: #409EFF;
            }
            .demo-table-expand .el-form-item {
                margin-right: 0;
                margin-bottom: 0;
               
            }
          .el-button--mini{
              padding: 0px 10px;
              line-height: 20px;
          }
          .el-rate{
              margin-top: 10px;
          }
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
