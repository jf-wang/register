
var inputchecked=[
    ['email','name','pwd','pwdc','gender','birthday','location','phoneNo','safetyC','license'],
    [0,0,0,0,0,0,0,0,0,0]];
var svg1="<svg class= \"icon ";
var svg2="\" aria-hidden=\"true\">"+
    "<use xlink:href=\"#icon-zliconwarning01\"></use>"+
    "</svg>";

$(function() {
    $(document).ready(function(){addcity('北京');});
    $(".pic1").click(function () {
        //字体和图标变色
        $(".pic1").removeClass("picbg2").addClass("picbg1");
        $(".pic2").removeClass("picbg1").addClass("picbg2");
        $(".pic1 p").removeClass("fontgray green").addClass("fontwhite white");
        $(".pic2 p").removeClass("fontwhite white").addClass("fontgray green");
        //对应模式其他行隐藏
        $('.main table .eaccount').addClass('hide');
        $('.phoneNo').removeClass('hide');
        $('.safetyC').addClass('hide');
        $('.name .msg').html('请输入昵称');
        $('.name input').focus();
        $('.phonecheck').removeClass('hide');
        //密码提示信息移动
        $('article .main .pwdinfo').css('top','406px');
        //<svg class="icon red" aria-hidden="true">
        //    <use xlink:href="#icon-zliconwarning01"></use>
        //    </svg>
        //    请输入邮箱
    });
    $(".pic2").click(function () {
        $(".pic1").removeClass("picbg1").addClass("picbg2");
        $(".pic2").removeClass("picbg2").addClass("picbg1");
        $(".pic2 p").removeClass("fontgray green").addClass("fontwhite white");
        $(".pic1 p").removeClass("fontwhite white").addClass("fontgray green");
        $('.main table .eaccount').removeClass('hide');
        $('.phoneNo').addClass('hide');
        $('.safetyC').removeClass('hide');
        $('.eaccount .msg').html('请输入您常用的电子邮箱<br><font onclick=\"altt()\">创建邮箱</font> 或 ' +
            '<font onclick=\"$(\'.pic1\').click()\">注册普通QQ号</font>');
        $('.name .msg').html('');
        $('.eaccount input').focus();
        $('.phonecheck').addClass('hide');
        $('article .main .pwdinfo').css('top','453px');
    });

//名字部分

    $('form .name input').blur(function () {
        namecheck();
        if (inputchecked[1][1] != 0) {
            $('form .name .msg').html('');
        }
        else {
            //alert();
            $('form .name .msg').html(svg1 + 'red' + svg2 + " 昵称不可以为空");
            //红色外框，并缩短2像素
            $('form .name input').addClass('alert');
            $('form .name input').addClass('short');
        }
    });
    $('form .name input').focus(function () {
        $('form .name input').removeClass('alert');
        $('form .name input').removeClass('short');
        if (inputchecked[1][1] != 0) {
            $('form .name .msg').html('');
        }
        else {
            $('form .name .msg').html('请输入昵称');
        }
    });
    //  0        1      2      3       4       5           6           7       8           9
    //['email','name','pwd','pwdc','gender','birthday','location','phoneNo','safetyC','license'],
    function namecheck() {
        //alert($("form .name input").val());
        if ($('form .name input').val() != '') {
            inputchecked[1][1] = 1;
        }
        else inputchecked[1][1] = 0;
    }


//密码部分
    $('form .pwd input').blur(function () {
        if (inputchecked[1][2] != 0) {
            $('.pwdinfo').addClass('hide');
            var string1="url(\".\/img\/soft.png\") no-repeat";
            var string2="url(\".\/img\/mid.png\" ) no-repeat";
            var string3="url(\".\/img\/strong.png\") no-repeat";
            var sum=0;
            var bool1=/[0-9]/g.test($('.pwd input').val());
            if(bool1)sum++;
            var bool2=/[a-z]/g.test($('.pwd input').val());
            if(bool2)sum++;
            var bool3=/[\[\]\,\./\<\>\?\!\@\#\$\%\^\&\*]/g.test($('.pwd input').val());
            if(bool3)sum++;
            if(sum==1)$('.pwd .msg').html("<span style='background:"+string1+";display:block;width:130px; height:27px;'></span>");
            if(sum==2)$('.pwd .msg').html("<span style='background:"+string2+";display:block;width:130px; height:27px;'></span>");
            if(sum==3)$('.pwd .msg').html("<span style='background:"+string3+";display:block;width:130px; height:27px;'></span>");
        }
        else {
            $('form .pwd input').addClass('alert');
            $('form .pwd input').addClass('short');
            $('.pwdinfo').removeClass('hide');

        }
    });
    //每次输入密码字符
    $('form .pwd input').keyup(function () {
        pwdcheck();
    });
    $('form .pwd input').focus(function () {
        $('form .pwd input').removeClass('alert');
        $('form .pwd input').removeClass('short');
        $('.pwdinfo').removeClass('hide');
        $('form .pwd input').removeClass('alert');
        $('form .pwd input').removeClass('alert');
        if (inputchecked[1][2] != 0) {
            $('.pwdinfo').addClass('hide');
        }
        else {
            $('.pwdinfo').removeClass('hide');
        }
    });
    function pwdcheck() {
        //alert();
        $('.pwdinfo').removeClass('hide');
        var checked = 1;
        var string = $('form .pwd input').val();
        if ($('form .pwd input').val() == '') {
            $('#pwditem1').removeClass();
            $('#pwditem2').removeClass();
            $('#pwditem3').removeClass();
            $('#pwditem1').html(svg1 + 'blue' + svg2 + ' 长度为6-16个字符');
            $('#pwditem2').html(svg1 + 'blue' + svg2 + ' 不能包含空格');
            $('#pwditem3').html(svg1 + 'blue' + svg2 + ' 不能是9位以下纯数字');
            checked = 0;
        }
        else {
            if (/^\S{6}/g.test(string)) {
                $('#pwditem1').removeClass('fontred');
                $('#pwditem1').html(svg1 + 'green' + svg2 + ' 长度为6-16个字符');
            }
            else {
                $('#pwditem1').html(svg1 + 'red' + svg2 + ' 长度为6-16个字符');
                $('#pwditem1').addClass('fontred');
                checked = 0;
            }
            if (/\s/g.test(string)) {
                $('#pwditem2').html(svg1 + 'red' + svg2 + ' 不能包含空格');
                $('#pwditem2').addClass('fontred');
                checked = 0;
            }
            else {
                $('#pwditem2').removeClass('fontred');
                $('#pwditem2').html(svg1 + 'green' + svg2 + ' 不能包含空格');
            }
            var bool = eval('/^[0-9]{' + string.length + '}/.test(string)');
            //alert(bool);
            if (bool && string.length <= 9) {

                $('#pwditem3').html(svg1 + 'red' + svg2 + ' 不能是9位以下纯数字');
                $('#pwditem3').addClass('fontred');
                checked = 0;
            }
            else {
                $('#pwditem3').removeClass('fontred');
                $('#pwditem3').html(svg1 + 'green' + svg2 + ' 不能是9位以下纯数字');
            }
            //alert(/\s/g.test($('form .pwd input').val()));
        }
        if (checked == 1) {
            inputchecked[1][2] = 1;
        }
        else inputchecked[1][2] = 0;
    }


//确认密码部分
    $('form .pwdc input').blur(function () {
        pwdccheck();
        if (inputchecked[1][3] != 0) {
            $('form .pwdc .msg').html('');
        }
        else {
            if ($('form .pwdc input').val() == '')
                $('form .pwdc .msg').html(svg1 + 'red' + svg2 + ' 请再次输入密码');
            else
                $('form .pwdc .msg').html(svg1 + 'red' + svg2 + ' 密码不一致');
            //$('form .pwdc .msg').html(svg1+'red'+svg2+" 昵称不可以为空");
            $('form .pwdc input').addClass('alert');
            $('form .pwdc input').addClass('short');
        }
    });
    $('form .pwdc input').focus(function () {
        $('form .pwdc input').removeClass('alert');
        $('form .pwdc input').removeClass('short');
        if (inputchecked[1][3] != 0) {
            $('form .pwdc .msg').html('');
        }
        else {
            if ($('form .pwdc input').val() == '')
                $('form .pwdc .msg').html(svg1 + 'red' + svg2 + ' 请再次输入密码');
            else
                $('form .pwdc .msg').html(svg1 + 'red' + svg2 + ' 密码不一致');
        }
    });
    //  0        1      2      3       4       5           6           7       8           9
    //['email','name','pwd','pwdc','gender','birthday','location','phoneNo','safetyC','license'],
    function pwdccheck() {
        //alert($("form .name input").val());
        if ($('form .pwdc input').val() == $('form .pwd input').val() && $('form .pwdc input').val() != 0) {
            inputchecked[1][3] = 1;
        }
        else inputchecked[1][3] = 0;

    }

//生日部分
    $('.birthdaytype li').hover(function () {
        $('.birthdaytype input').val($(this).html());
    });
    $('.birthdaytype li').click(function () {
        $('.birthdaytype input').val($(this).html());
        //alert($(this).html()+"年");
    });
    $('.birthdaytype input').click(function () {
        $('.birthdaytype ul').css("display", "block");
        //$('.year input').val($('.year li').html()+"年");
    });

    //各行不为空
    $('.year li').hover(function () {
        $('.year input').val($(this).html() + "年");
    });
    $('.year li').click(function () {
        $('.year input').val($(this).html() + "年");
    });
    $('.year input').click(function () {
        $('.year ul').css("display", "block");
    });
    $('.month li').hover(function () {
        $('.month input').val($(this).html());
    });
    $('.month li').click(function () {
        $('.month input').val($(this).html());
    });
    $('.month input').click(function () {
        $('.month ul').css("display", "block");
    });

    $('.date li').hover(function () {
        $('.date input').val($(this).html());
    });
    $('.date li').click(function () {
        $('.date input').val($(this).html());
    });
    $('.date input').click(function () {
        $('.date ul').css("display", "block");
    });
//位置
    $('.country li').hover(function () {
        $('.country input').val($(this).html());
    });
    $('.country li').click(function () {
        $('.country input').val($(this).html());
    });
    $('.country input').click(function () {
        $('.country ul').css("display", "block");
    });


    //动态添加
    $('.province li').hover(function () {
        $('.province input').val($(this).html());
        $('.city ul').empty();
        addcity($(this).html());
    });
    $('.province li').click(function () {
        $('.province input').val($(this).html());
        $('.city ul').empty();
        addcity($(this).html());
    });
    $('.province input').click(function () {
        $('.province ul').css("display", "block");
    });
    function addcity(cityname) {
        var a;
        var b=[['石景山','朝阳区','西城区','东城区','海淀区'],[ '河北区','河东区','南开区','和平区']];
        var index=0;
        if(cityname=='北京'){
            index=0;
        }
        else {
            index=1;
        }
        for (var i = 0; i < b[index].length; i++) {
            a=$('<li>'+b[index][i]+'</li>');
            $('.city ul').append($(a));
        }
        $('.city input').val(b[index][0]);
    }



    $('body').on('hover','.city li',function(){
        $('.city input').val($(this).html());
    });
    $('body').on('click','.city li',function(){
        //alert();
        $('.city input').val($(this).html());
    });
    $('.city input').click(function(){
        $('.city ul').css("display","block");
    });

//电话号码检查
    $('form .phoneNo input').blur(function () {
        phonenumbercheck();
        if (inputchecked[1][7] != 0) {
            $('form .phoneNo .msg').html('');
        }
        else {
            $('form .phoneNo .msg').html(svg1 + 'red' + svg2 + " 请输入正确的电话号码");
            $('form .phoneNo input').addClass('alert');
            $('form .phoneNo input').addClass('short');
        }
    });
    $('form .phoneNo input').focus(function () {
        $('form .phoneNo input').removeClass('alert');
        $('form .phoneNo input').removeClass('short');
        if (inputchecked[1][7] != 0) {
            $('form .name .msg').html('');
        }
        else {
            $('form .phoneNo .msg').html('请输入正确的电话号码');
        }
    });
    //  0        1      2      3       4       5           6           7       8           9
    //['email','name','pwd','pwdc','gender','birthday','location','phoneNo','safetyC','license'],
    function phonenumbercheck(){
        var string=$('form .phoneNo input').val();
        var bool=/^1[34578]\d{9}$/.test(string);
        if(bool){
            inputchecked[1][7] = 1;
        }
        else inputchecked[1][7] = 0;
    }

    //全局下拉菜单ul隐藏
    $(document).mouseup(function(){
        $('.year ul').css("display","none");
        $('.month ul').css("display","none");
        $('.birthdaytype ul').css("display","none");
        $('.date ul').css("display","none");
        $('.country ul').css("display","none");
        $('.province ul').css("display","none");
        $('.city ul').css("display","none");
        $('.eaccount ul').css('display','none');
    });
    function ocheck() {
        if ($('.year input').val() != ''&&$('.year input').val() != '年') {
            if ($('.month input').val() != ''&&$('.month input').val() != '月') {
                if ($('.date input').val() != ''&&$('.date input').val() != '日') {
                    inputchecked[1][5] = 1;
                }
            }
        }
        if(inputchecked[1][5]==0)$('.birthday .msg').html(svg1+'red'+svg2+' 请选择生日');
        if ($('.country input').val() != '') {
            if ($('.province input').val() != '') {
                if ($('.city input').val() != '') {
                    inputchecked[1][6] = 1;
                }
            }
        }
    }
    //提交时各行检查
    $('.submit button').click(function(){
        pwdccheck();
        pwdcheck();
        namecheck();
        phonenumbercheck();
        ocheck();
        $('input').blur();

        //  0        1      2      3       4       5           6           7       8           9
        //['email','name','pwd','pwdc','gender','birthday','location','phoneNo','safetyC','license'],
        if(inputchecked[1][1]+inputchecked[1][2]+inputchecked[1][3]+inputchecked[1][5]+
            inputchecked[1][6]+inputchecked[1][7]==6)
            alert('Submit Success');
    });
});
//邮箱注册改变行的内容
function altt(){
    $(function(){
        $('.eaccount .inbox').html('<input type="text"/>');
        $('.eaccount input').css('width','176px');
    //    167 73
        var a;
        a=$('<input class="email" \/>');
        a.css({
            'margin-left':'4px',
            'width':'88px',
            'height':'18px',
            'border-radius':'4px',
            'background-color':'white',
            'font-size':'12px',
            'padding-left':'6px'
        });
        $(a).val('@gmail.com');
        $('.eaccount .inbox').append(a);
        a=$('<ul></ul>');
        a.css({
            'list-style': 'none',
            'position': 'absolute',
            'top':'39px',
            'left':'196px',
            'width':'98px',
            'height':'82px',
            'z-index': '111',
            'border': '1px solid #57a8e4',
            'background-color': '#f3f9fc',
            'font-size': '12px',
            'padding': '1px 1px 1px 1px',
            'display': 'none'
        });
        $('.eaccount .inbox').append(a);
        var string=['@gmail.com','@qq.com'];
        a=$('<li>'+string[0]+'</li>');
        a.css('cursor','pointer');
        $('.eaccount .inbox ul').append(a);
        a=$('<li>'+string[1]+'</li>');
        a.css('cursor','pointer');
        $('.eaccount .inbox ul').append(a);




        $('body').on('click','.eaccount .email',function(){
            $('.eaccount ul').css('display','block');
        });
        $('body').on('click','.eaccount ul li',function(){
            $('.eaccount .email').val($(this).html());
            $('.eaccount ul').css('display','none');
        });
//检查输入
        $('.eaccount input').blur(function(){
            var bool;
            bool=/^[0-9a-zA-Z_]{3}/g.test($('.eaccount input').val());
            //alert(bool);
            if($('.eaccount input').val()==''){
                $('.eaccount .msg').html(svg1+'red'+svg2+' 请输入邮箱');
                $($('.eaccount input')[0]).css({'border':'1px solid red','width':'174px'});
            }
            else{
                if(bool==true&&!(/[^0-9a-zA-Z_]{1}/g.test($('.eaccount input').val()))){
                    $('.eaccount .msg').html(svg1+'green'+svg2+' 帐号可用');
                }
                else {
                    $('.eaccount .msg').html(svg1+'red'+svg2+' 长度为3-16位字符');
                    if(/[^0-9a-zA-Z]$/g.test($('.eaccount input').val()))
                        $('.eaccount .msg').html(svg1+'red'+svg2+' 以数字或字母结尾');
                }
            }
        });
        $('.eaccount input').click(function(){
            $('.eaccount .msg').html('请创建邮箱名，由3-18个英文、数字、点、<br>减号、下划线组成');
            $($('.eaccount input')[0]).css('border','0px solid red');
        });

    });

}
