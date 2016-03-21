$.getJSON("DashJSON.json",loadOptions)

function loadOptions(data) {
	console.log(data);
	console.log(data.ManageRoute);
	console.log(data.ManageBus);
	console.log(data.BusTicketInfo);
	console.log(data.Dashboard);

	$.each(data.ManageRoute, function(index, value) 
	{		
		var routes = $("<li>", {
			"text" : value
		});
		routes.appendTo($("#routes"));
	});

	$.each(data.ManageBus, function(index, value)
	{		
		var bus = $("<li>", {
			"text" : value
		});
		bus.appendTo($("#bus"));
	});

	$.each(data.BusTicketInfo, function(index, value) 
	{		
		var TicketInfo = $("<li>", {
			"text" : value
		});
		TicketInfo.appendTo($("#TicketInfo"));

	});

	$.each(data.Dashboard,function(index, value)
	{
		var dashboarditem = $("<li>",{
			"text" :value
		});
		dashboarditem.appendTo($("#dashboarditem"));
	});
}

/*Click Dropdown toogle ON*/

/*function toogle() 
{
    var list = document.getElementById("#routes");
    list.toogle();
}
*/

/*$each("ManageRoute").click(function() {
	$("#routes li").toogle();
});*/

/*  $(document).ready(function () {
        $('<routes ').hover(
        function () {
            //show submenu
            $('ul', this).slideDown("fast");
        }, function () {
            //hide submenu
            $('ul', this).slideUp("fast");
        });
    });*/
   /*$(function(){
    $('#ManageRoute').click(function(){
        $('#routes').show();        
    });
    $('#routes li').click(function(e){
         $('#ManageRoute').text($(this).text());
         $('#routes').hide(); 
        $(this).addClass('current');
        e.preventDefault();
    })
})*/