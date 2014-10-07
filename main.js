$
(
	function()
	{
		$('#neonLights a').hover
		(
			function(e)
			{
				var classes=$(e.target).attr('css')
				console.log(classes)
				if(classes!='active')
				{
					$(e.target).addClass('active')
				}

			}
		)
	}
)