		var back = document.getElementById('back');
		var next = document.getElementById('next');
		var polosa = document.getElementById('polosa'); 
		var right = 0;

			next.onclick = function sliderLeft(){
				right = right - 650;
				if (right < -2600) {
					right = -2600;
				}
				polosa.style.left = right+"px";
			};
			back.onclick = function(){
				right = right +650; 
				if (right > 0) {
					right = 0;
				}
				polosa.style.left = right+"px";
			};