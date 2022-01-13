$(function(){
  //Tab
  $(".boxTab .tab").click(function(){
    var target = $(this).attr("data-tab");
    $(this).addClass("active").siblings(".tab").removeClass("active");
    $("#"+target).addClass("active").siblings(".tabArea").removeClass("active");
  });

  //Date
  $(".datepicker").datepicker({ dateFormat: 'yy.mm.dd' });

  //Form Date
  $(".inputDate").click(function(){
    $(this).children("input[type='radio']").trigger("change");
    $(this).addClass("active");
    $(".inputAll input[type='radio']").prop("checked", false);
  });

  $(".boxSearch input[type='radio']").change(function(){
    var target = $(this).attr("id");
    console.log(target);
    if(target == "chk_all"){
      $(".inputDate").removeClass("active").find("input[type='text']").val('');
    }
  });

  //Select
  $(".boxSelect .list").slideUp(0);
  $(".boxSelect .selected").click(function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      $(this).next(".list").slideUp(300);  
    }else{
      $(this).addClass("on");
      $(this).next(".list").slideDown(300);
    }
  });
  $(".boxSelect .list li").click(function(){
    var target = $(this).html();
    $(".boxSelect .selected").html(target).removeClass("on");
    $(".boxSelect .list").slideUp(300);
  });

});