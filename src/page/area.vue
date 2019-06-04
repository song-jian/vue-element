<template>
    <div class="tablebox">
        <div class="table_container">
            <el-tabs type='border-card'>
                <el-tab-pane>
                    <span slot="label" @click="toggleTabs('eastChina')" class='item'>
                        <i class="el-icon-camera-solid"></i>华东区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('southChina')" class='item'>
                        <i class="el-icon-s-data"></i>华南区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('centralChina')" class='item'>
                        <i class="el-icon-s-open"></i>华中区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('northChina')" class='item'>
                        <i class="el-icon-picture-outline-round"></i>华北区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('northwestChina')" class='item'>
                        <i class="el-icon-s-fold"></i>西北区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('southwestChina')" class='item'>
                        <i class="el-icon-s-finance"></i>西南区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('northeastChina')" class='item'>
                        <i class="el-icon-s-ticket"></i>东北区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                 <el-tab-pane>
                    <span slot="label" @click="toggleTabs('specialareaChina')" class='item'>
                        <i class="el-icon-s-promotion"></i>港澳台区域
                    </span>
                    <china-tabs-table :toggleData='toggleData'></china-tabs-table>
                </el-tab-pane>
                
            </el-tabs>
        </div>
    </div>
</template>
<script>
import chinaTabsTable from '../components/chinaTabsTable'
import data from '../../static/data/chinaTabs.json'
console.log(data)
export default {
    components: {
        chinaTabsTable
    },
    data(){
        return{
           toggleData:''
        }
    },
    methods:{
        toggleTabs(item){
           this.toggleData = item
        }
    },
    mounted(){
        this.toggleTabs('eastChina')
    }
}
</script>
<style lang="less">
.tablebox{
    width: 100%;
    .table_container{
        margin-top: 20px;
        .item{
            display: flex;
            align-items: center;
            i{
                font-size:18px;
                margin-right: 5px;
            }
        }
    }
}
</style>


