HTMLElement.prototype.wlcm = function (settings={
	"words": ["Hi!","Hallo!","Holla!","Γεία!","Bonjour!"],
	"min_speed": 1, 
	"max_speed": 3
}) { 
	
	/* Setting settings default values */
	settings.min_speed = typeof settings.min_speed !== 'undefined' ? settings.min_speed : 1;
	settings.max_speed = typeof settings.max_speed !== 'undefined' ? settings.max_speed : 1.5;

	// setting min speed
	if (settings.min_speed < 1) {
		settings.min_speed = 1;
		console.log("wlcm min_speed must be greater than or equol 1.");
	}

	// initializing wlcm container
	var wlcm_contenaier = this;

	// setting default element-css
	wlcm_contenaier.style = "position:relative;overflow:hidden;";

	/**
	* Section to create words and append it to wlcm container
	*/
	for (i=0;i<settings.words.length;i++) {

		// create word element
		let word_container = document.createElement("span");

		// setting id and html
		word_container.innerHTML = settings.words[i];
		word_container.id = "wlcm_element";

		// initializing starting top, speed and left
		let top = getRandomNumber(25, wlcm_contenaier.clientHeight-17, true);
		let left = getRandomNumber(-100, wlcm_contenaier.clientWidth, true);
		let speed = getRandomNumber(settings.min_speed, settings.max_speed);

		// setting speed
		word_container.setAttribute("speed", speed);
		
		// setting default style
		word_container.style = "position:absolute;top:"+top+"px;display:inline-block;max-width:200px;";

		// setting start left position
		word_container.style.left = left+"px";


		// appending word element to wlcm container
		wlcm_contenaier.appendChild(word_container);

	}
	
	/**
	* Clock to update position of words
	*/
	wlcm_timer = setInterval(function() {


		// getting wlcm container children
		let word_nodes = wlcm_contenaier.children;
		

		// looping wlcm container children
		for (i=word_nodes.length-1;i>=0;i--) {


			// setting current node for each wlcm container children
			let current_node = word_nodes[i];

			// cleft for correct left position of current node
			let  cleft = parseInt(current_node.style.left, 10);

			// getting current node starting speed from attribute 
			let speed = current_node.getAttribute("speed");

			// updating left position of current node
			cleft -= speed*((cleft < 0) ? 2 : 1);

			// if current node is offscreen go to end
			if (cleft < -current_node.clientWidth) cleft = wlcm_contenaier.clientWidth + current_node.clientWidth;

			// updating left position of current node
			current_node.style.left = cleft + "px";

		}


	}, 25);


	/**
	* Function for random numbers
	*/
	function getRandomNumber(min, max, int = false) {
		if (int) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			return Math.random() * (max - min) + min;
		}
	}

};

