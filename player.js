const playlistData = [
    {
      id: "1",
      title: "Croissants | Flour and Stone",
      thumbnail: "https://i.vimeocdn.com/video/600595198_390x220.webp",
    },
    {
      id: "2",
      title: "Perfect Mashed Potatoes and Gravy",
      thumbnail: "https://i.vimeocdn.com/video/604150056_390x220.webp",
    },
    {
      id: "3",
      title: "The Heart of Soba",
      thumbnail: "https://i.vimeocdn.com/video/726986673_390x220.webp",
    },
    {
      id: "4",
      title: "Grilled Cheese 9 Ways",
      thumbnail: "https://i.vimeocdn.com/video/570486309_390x220.webp",
    },
    {
      id: "5",
      title: "Pineapple Cheesecake",
      thumbnail: "https://i.vimeocdn.com/video/602705517_390x220.webp",
    },
    {
      id: "6",
      title: "Lemony Chicken Noodle Soup",
      thumbnail: "https://i.vimeocdn.com/video/537261616_390x220.jpg",
    },
    {
      id: "7",
      title: "Pumpkin Roll",
      thumbnail: "https://i.vimeocdn.com/video/608805594_590x332.jpg",
    },
    {
      id: "8",
      title: "How to Brine a Turkey",
      thumbnail: "https://i.vimeocdn.com/video/601730519_590x332.jpg",
    },
    {
      id: "9",
      title: "Stop Motion Dry-Brined Turkey Recipe",
      thumbnail: "https://i.vimeocdn.com/video/456852083_590x332.jpg",
    },
    {
      id: "10",
      title: "Butternut Squash Ravioli",
      thumbnail: "https://i.vimeocdn.com/video/600328152_590x332.jpg",
    },
  ];
  
  const videoPlaySectionData = [
    {
      id: "1",
      title: "Croissants | Flour and Stone",
      description:
        "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
      views: 22500,
      vimeoId: 190062231,
      isLiked: "true",
      isSaved: "true",
    },
    {
      id: "2",
      title: "Perfect Mashed Potatoes and Gravy",
      description:
        "Get the recipe for potatoes at http://bit.ly/mashedpotatoesandgravy.",
      views: 22200,
      vimeoId: 192650599,
      isLiked: "false",
      isSaved: "false",
    },
    {
      id: "3",
      title: "The Heart of Soba",
      description:
        "Binge more: MOONCAKE: THE LOST ART - foodtalkies.com/mooncake THE GIFT OF MOCHI - foodtalkies.com/mochi NIRVANA - foodtalkies.com/nirvana EARTH - foodtalkies.com/earth Special thanks to: Mutsuko Soma & Tiffany Ran. Direction, Cinematography & Edit: Andrew Gooi - andrewgooi.com Seattle-based chef and soba artisan, Mutsuko Soma, of Kamonegi / kamonegiseattle.com / shares the craft behind these amazing buckwheat noodles.",
      views: 6297820,
      vimeoId: 192834629,
      isLiked: "false",
      isSaved: "true",
    },
    {
      id: "4",
      title: "Grilled Cheese 9 Ways",
      description:
        "The best grilled cheese sandwich recipes clubbed into one video. Cheers!!",
      views: 38600,
      vimeoId: 166409731,
      isLiked: "false",
      isSaved: "true",
    },
    {
      id: "5",
      title: "Pineapple Cheesecake",
      description:
        "Pineapple Cheesecake: 150g butter snap cookies; 90g butter, melted; 2 packs cream cheese, room temperature; 3/4 cup sugar; 1/2 tsp vanilla extract; 4 eggs; 4 slices canned pineapple (drained first); Preheat oven at 320°F. Lightly grease mini muffin pans with melted butter, then line each recess with strips of wax paper (1in wide x 3in long), crossing at base. Pulse cookies in a food processor until finely crumbled, then add melted butter to combine. Divide mixture into muffin pans and press firmly into bases. Prepare filling by mixing cream cheese, sugar and vanilla extract with an electric mixer. Add eggs, one at a time, beating well after each addition. Pulse sliced pineapple in a food processor into pulp and add to cream cheese mixture. Divide filling into muffin pans and bake 25-30 minutes until just firm. Cool slightly, then chill for at least 2 hours. Serving suggestion: Pipe some whipped cream over the cheesecake and top with a small slice of pineapple that's been dipped in Li-hing powder. Garnish with mint leaves.",
      views: 998110,
      vimeoId: 191626548,
      isLiked: true,
      isSaved: true,
    },
    {
      id: "6",
      title: "Lemony Chicken Noodle Soup",
      description: "blog.moonberry.com/recipe-lemony-chicken-noodle-soup/",
      views: 30210,
      vimeoId: 140657270,
      isLiked: true,
      isSaved: true,
    },
    {
      id: "7",
      title: "Pumpkin cream cheese swiss roll",
      description:
        "The ultimate Pumpkin cream cheese swiss roll recipe. Really simple to follow.",
      views: 19829,
      vimeoId: 196351090,
      isLiked: true,
      isSaved: true,
    },
    {
      id: "8",
      title: "How to Brine a Turkey",
      description: "Get the recipe at http://bit.ly/tbrine.",
      views: 12230,
      vimeoId: 190907060,
      isLiked: true,
      isSaved: true,
    },
    {
      id: "9",
      title: "Stop Motion Dry-Brined Turkey Recipe",
      description:
        "This is a short stop motion video of a recipe I created for a turkey cook-off(wine pairing towards the end). With a special thanks to City Winery Chicago. *Background song - 'Go Bang' by SBTRKT",
      views: 30010,
      vimeoId: 80687436,
      isLiked: true,
      isSaved: true,
    },
    {
      id: "10",
      title: "Butternut Squash Ravioli with Brown Butter Sage Sauce",
      description: "Get the recipe at http://bit.ly/ButternutRav.",
      views: 851029,
      vimeoId: 189860660,
      isLiked: true,
      isSaved: true,
    },
  ];
  
  const playerBaseURL = "https://player.vimeo.com/video/";
  
  $(document).ready(function () {
    const player = $("#video-player");
    const videoViews = $("#views-count");
    const videoTitle = $("#video-title");
    const videoDescription = $("#video-description");
    const likeIcon = $("#likeIcon");
  
    function onVideoCardClickHandler(e) {
      const videoId = e.target.parentNode.id;
      let videoObject = null;
  
      // Find the required video data object and store it in videoObject variable
      for (let counter = 0; counter < videoPlaySectionData.length; counter++) {
        const currentVideoData = videoPlaySectionData[counter];
        if (currentVideoData.id === videoId) {
          videoObject = currentVideoData;
          break;
        }
      }
  
      if (videoObject) {
        player.attr("src", playerBaseURL + videoObject.vimeoId);
  
        videoViews.text(videoObject.views / 1000 + "k");
        videoTitle.text(videoObject.title);
        videoDescription.text(videoObject.description);
  
        if (videoObject.isLiked == true) {
          likeIcon.removeClass("far");
          likeIcon.addClass("fas");
        } else {
          likeIcon.removeClass("fas");
          likeIcon.addClass("far");
        }
  
        // ToDo : Toggle the far and fas class on save icon
      }
  
      // ToDo : Create the border on the clicked card in playlist
    }
  
    function createPlaylistCard(obj) {
      var mainDiv = document.createElement("div");
      mainDiv.id = obj.id;
      mainDiv.className = "playlist-card";
      mainDiv.addEventListener("click", onVideoCardClickHandler);
  
      var thumbnail = document.createElement("img");
      thumbnail.src = obj.thumbnail;
      thumbnail.className = "thumbnail";
  
      var title = document.createElement("h3");
      title.className = "video-card-title";
      title.innerHTML = obj.title;
  
      mainDiv.appendChild(thumbnail);
      mainDiv.appendChild(title);
  
      return mainDiv;
    }
  
    // Create playlist dynamically
    const playlistWrapper = $("#playlist-wrapper");
  
    for (let counter = 0; counter < playlistData.length; counter++) {
      const currentCardData = playlistData[counter];
      const playlistCard = createPlaylistCard(currentCardData);
      playlistWrapper.append(playlistCard);
    }
  
    // Show the first video dynamically
    player.attr("src", playerBaseURL + videoPlaySectionData[0].vimeoId);
  
    // ToDo : Set the remaining values of first video here
  });