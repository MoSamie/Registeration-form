



	function disable(){
			var pass=document.getElementById("password");
			var repasso=document.getElementById("repass");
			if(repasso.value!==pass.value){
				document.getElementById("ibutton").disabled=true;
			}
			else
				document.getElementById("ibutton").disabled=false;
		}
		function listen() {
				var pass = document.getElementById("password");
				var repass = document.getElementById("repass");
				pass.addEventListener('keyup', disable);
				repass.addEventListener('keyup', disable);
			}

			function directing() {
        location.href = "www.google.com";
    };