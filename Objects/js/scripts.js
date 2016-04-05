
$(document).ready(function() {
	console.log("ready to code");

	var img1 = {
		title: "Bouquet",
		url: "images/bouquet.jpg",
		tags: ["flower", "rose", "pink"],
		starred: false,
		starToggle: function() {
			$("#" + this.title + " .star").toggleClass("starOn");
			console.log("#" + this.title + " .star");
			this.starred = !this.starred;
		}
	};

	var img2 = {
		title: "Tree",
		url: "images/tree.jpg",
		tags: ["tree", "landscape", "forest"],
		starred: false,
		starToggle: function() {
			$("#" + this.title + " .star").toggleClass("starOn");
			console.log("#" + this.title + " .star");
			this.starred = !this.starred;
		}
	};

	function img2 = {
		this.title: "Tree";
		this.url: "images/tree.jpg";
		this.tags: ["tree", "landscape", "forest"];
		this.starred: starred;
		this.starToggle: function() {
			
			this.starred = !this.starred;
		}
		var img1 = new Image("Bouquet", "bouquet.jpq", ["flower", "rose", "pink"], false);
		var img2 = new Image("Tree", "tree.jpg", ["tree", "forest", "green"], false);
	};

	var images = [img1, img2];

	images.forEach(function(img){ 
		var $fig = $("<figure>");
		$fig.attr("id", img.title);

		var $img = $("<img>");
		$img.attr("src", img.url);

		var $imgInfo = $("<figcaption>");
		$imgInfo.text("TAGS: " + img.tags[0] + ", " + img.tags[1] + ", " + img.tags[2]);

		var $star = $("<span>");
		$star.addClass("star");

		$imgInfo.append($star);

		$fig.append($img);
		$fig.append($imgInfo);

		$("#gallery").append($fig);

		if(img.starred == true){
			img.starToggle();
		}

		$(".star").on("click", function() {
			var obj = $(this).parent().parent().get(0);
			console.log(obj);
			if (obj.id == img.title){

			img.starToggle();
			}
		});
	});

	$("#filterFlower").on("click", function(){ 
		filter("flower");
	});
	$("#filterTree").on("click", function(){ 
		filter("tree");
	});
	$("#filterFav").on("click", function() {
		filter(true);
	});

	function filter(tag) { 
		images.forEach(function(img) {
			console.log($.inArray(tag, img.tags));
			if($.inArray(tag, img.tags) >= 0){
				$("#" + img.title).fadeIn();
			} else if(img.starred == tag){
				$("#" + img.title).fadeIn();
			}else {
				$("#" + img.title).fadeOut();
			}
		});
	}

	var name = $("input[name=title]");
	var tags = $("input[name=tags]");
	var file = $("input[type=file]");


	$("#submit").on("click", function(){

		var newImg = new Image (name.val(), window.URL.createObjectURL(file.get(0).files[0]), ("Bouquet", "bouquet.jpq", ["flower", "rose", "pink"], false);

	});


});