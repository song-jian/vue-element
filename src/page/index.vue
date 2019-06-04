<template>
    <div class="index_page">
        <headertop></headertop>
        <el-row style="height:100%">
            <!-- 侧边栏开始 -->
           <el-col :span='3' class="menu_page">
               <el-menu :default-active='defaultrouter' router>
                   <!-- :default-openeds="['2']" 默认打开第二栏 -->
                    <el-menu-item index='index'>
                        <i class="el-icon-menu"></i>首页
                    </el-menu-item>
                    <el-submenu index="2">
						<template slot='title'>
                            <i class="el-icon-document"></i>数据管理
                        </template>
                        <el-menu-item index='userList'>用户列表</el-menu-item>
                        <el-menu-item index='shopList'>商家列表</el-menu-item>
                        <el-menu-item index='foodList'>食品列表</el-menu-item>
                        <el-menu-item index='orderList'>订单列表</el-menu-item>
                        <el-menu-item index='adminList'>管理员列表</el-menu-item>

					</el-submenu>
                    <el-submenu index='3'>
                        <template slot='title'>
                            <i class="el-icon-plus"></i>添加数据
                        </template>
                        <el-menu-item index='addShop'>添加商铺</el-menu-item>
                        <el-menu-item index='addGood'>添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index='4'>
                        <template slot='title'>
                            <i class="el-icon-star-on"></i>投资管理
                        </template>
                        <el-menu-item index='city'>省份管理</el-menu-item>
                        <el-menu-item index='area'>区域管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index='5'>
                        <template slot='title'>
                            <i class="el-icon-star-on"></i>图表
                        </template>
                        <el-menu-item index='visitor'>用户分布</el-menu-item>
                    </el-submenu>
                    <el-submenu index='6'>
                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
					</el-submenu>
					<el-submenu index="8">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
               </el-menu>
           </el-col>
           <!-- 侧边栏结束 -->
           <!-- 右边内容 -->
           <el-col :span='21' class="right_content">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
               <keep-alive class="keep-alive">
                    <router-view></router-view>
               </keep-alive>
           </el-col>
        </el-row>
    </div>
</template>
<script>
import headertop from '../components/Header'
export default {
    components: {
        headertop
    },
    computed:{
        defaultrouter(){
            // console.log(this.$route.path)
            return this.$route.path.replace('/','')
        }
    }
}
</script>
<style lang="less">
.index_page{
    width: 100%;
    height:calc(100% - 70px);
    position: relative;
    top: 70px;
    .menu_page{
        height:100% ;
        background-color: red;
        position: relative;
        left: 0;
        overflow: hidden;
    }
    .el-menu{
        border:none !important;
        border-radius:0; 
        background-color:#242f42 !important;
        min-height:100%;
        .el-menu-item{
            min-width:100%;
            color: #dddccc !important;
        }
        .el-menu-item:focus,.el-menu-item:hover{
           background-color: #48576a !important;
           color: #dddccc;
        }
        .el-submenu__title{
             color: #dddccc !important;
        }
        .el-submenu__title:hover {
            background-color: #48576a !important;
            color: #dddccc !important;
        }
       
    }
    .el-menu-item.is-active,.el-menu.is-active {
    color: #20a0ff !important;
    }
}
.right_content{
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .el-breadcrumb{
        margin-bottom: 10px;
    }
}
</style>


