<template>
    <div class="header">
        <div class="logo">登录管理系统</div>
        <div class="user-info">
            <img class="user-logo" src="../../static/img/img.jpg">
            <div class="ueser-name">{{username}}</div>
             <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <i class="el-icon-setting" style="margin-left:10px"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!-- <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    
                    {{username}}
                </span>
               <div class="header_right">
                <div>
                    <p class="welcome">欢  迎</p>
                    <p style="color:#F42020">宋健同学</p>
                </div>
                <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <i class="el-icon-setting" style="margin-left:10px"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
                </div>
            </el-dropdown> -->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '宋健'
            }
        },
        computed:{
            username(){
                let username = sessionStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    sessionStorage.removeItem('ms_username')
                    sessionStorage.removeItem('ms_userId')
                    this.$router.push('/login');
                } else if (command == 'userCenter') {
                    this.$router.push('/userCenter');
                }
            }
        }
    }
</script>
<style lang="less">
    .header {
        background-color:#242f42;
        position: fixed;
        left: 0;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        z-index: 9999;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        // border-bottom: 1px solid #000;
        justify-content: space-between;
        .logo{
            margin-left: 20px;
        }
        .user-info{
            display: flex;
            align-items: center;
            margin-right: 20px;
            .user-logo{
                display: inline-block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .ueser-name{
                font-size: 16px;
                margin-left: 10px;
                color: #F42020;
            }
            .el-dropdown{
                line-height: 70px;
                height: 70px;
                .el-dropdown-link{
                    color: #fff;
                }
            }
        }
       
        .el-dropdown-menu__item{
            font-size: 16px !important;
        }
    }
    
   
    // .user-info .el-dropdown-link{
    //     position: relative;
    //     display: inline-block;
    //     color: #fff;
    //     cursor: pointer;
    //     vertical-align: middle;
    // }
    
</style>
