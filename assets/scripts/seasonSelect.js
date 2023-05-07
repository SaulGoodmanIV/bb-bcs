$(document).ready(function(){
	$("#s1").css('font-weight', 'bold');
	$("#s2").css('font-weight', 'normal')
	$("#s3").css('font-weight', 'normal')	
	$("#s4").css('font-weight', 'normal')
	$("#s5").css('font-weight', 'normal')
	$("#s6").css('font-weight', 'normal')
	$(".s1").show();
	$(".s2").hide();
	$(".s3").hide();
	$(".s4").hide();
	$(".s5").hide();
	$(".s6").hide();
	$("#s1").click(function(){
		$("#s1").css('font-weight', 'bold');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'normal')	
		$("#s4").css('font-weight', 'normal');
		$("#s5").css('font-weight', 'normal')
		$("#s6").css('font-weight', 'normal')	
		$(".s1").show();
		$(".s2").hide();
		$(".s3").hide();
		$(".s4").hide();
		$(".s5").hide();
		$(".s6").hide();
	});
	$("#s2").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'bold')
		$("#s3").css('font-weight', 'normal')
		$("#s4").css('font-weight', 'normal');
		$("#s5").css('font-weight', 'normal')
		$("#s6").css('font-weight', 'normal')
		$(".s1").hide();
		$(".s2").show();
		$(".s3").hide();
		$(".s4").hide();
		$(".s5").hide();
		$(".s6").hide();
	});
	$("#s3").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'bold')
		$("#s4").css('font-weight', 'normal');
		$("#s5").css('font-weight', 'normal')
		$("#s6").css('font-weight', 'normal')	
		$(".s1").hide();
		$(".s2").hide();
		$(".s3").show();
		$(".s4").hide();
		$(".s5").hide();
		$(".s6").hide();
	});
	$("#s4").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'normal')	
		$("#s4").css('font-weight', 'bold');
		$("#s5").css('font-weight', 'normal')
		$("#s6").css('font-weight', 'normal')	
		$(".s1").hide();
		$(".s2").hide();
		$(".s3").hide();
		$(".s4").show();
		$(".s5").hide();
		$(".s6").hide();
	});
	$("#s5").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'normal')	
		$("#s4").css('font-weight', 'normal');
		$("#s5").css('font-weight', 'bold')
		$("#s6").css('font-weight', 'normal')	
		$(".s1").hide();
		$(".s2").hide();
		$(".s3").hide();
		$(".s4").hide();
		$(".s5").show();
		$(".s6").hide();
	});
	$("#s6").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'normal')	
		$("#s4").css('font-weight', 'normal');
		$("#s5").css('font-weight', 'normal')
		$("#s6").css('font-weight', 'bold')	
		$(".s1").hide();
		$(".s2").hide();
		$(".s3").hide();
		$(".s4").hide();
		$(".s5").hide();
		$(".s6").show();
	});
});
