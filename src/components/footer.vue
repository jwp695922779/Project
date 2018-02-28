<template>
    <div id="footer" class="footer">
        <div class="content">
            <span class="line_icon">
                <p class="phbox">
                    <img src="../assets/img/icon/tb_01.png" alt="" class="phfront">
                    <img src="../assets/img/icon/tb_04.png" alt="" class="phback">
                </p>
            </span>
            <!--<span class="line_icon">-->
                <!--<div>-->
                    <!--<img src="../assets/img/icon/tb_02.png" alt="">-->
                    <!--<img src="../assets/img/icon/tb_05.png" alt="">-->
                <!--</div>-->
            <!--</span>-->
            <!--<span class="line_icon">-->
                <!--<div>-->
                    <!--<img src="../assets/img/icon/tb_03.png" alt="">-->
                    <!--<img src="../assets/img/icon/tb_06.png" alt="">-->
                <!--</div>-->
            <!--</span>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 250px;
        background-color: #363D43;
        .content{
            height: 250px;
            width: 1200px;
            margin: 0 auto;
            position: relative;
            .line_icon{
                width: 30px;
                height: 30px;
                position: relative;
                float: left;
                padding-right: 20px;
                padding-bottom: 20px;
                .phbox{
                    width: 30px;
                    height: 30px;
                    position: relative;
                    overflow: hidden;
                    .phfront{
                        position: absolute;
                        left: -30px;
                        height: 30px;
                        width: 30px;
                    }
                    .phback{
                        position: absolute;
                        left: 0;
                        height: 30px;
                        width: 30px;
                    }
                }

            }
        }
    }
</style>
<style lang="scss">

</style>
