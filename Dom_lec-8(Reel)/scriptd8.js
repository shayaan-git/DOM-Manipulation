const reels = [
  {
    ismuted: true,
    username: "techyMe",
    likeCount: 12200,
    isLiked: true,
    commentCount: 430,
    shareCount: 97,
    isFollowed: false,
    caption: "JS event loop ko samajhna zindagi ko samajhne se mushkil hai.",
    video: "./video01.mp4",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    ismuted: true,
    username: "fitnessRiya",
    likeCount: 9800,
    isLiked: false,
    commentCount: 312,
    shareCount: 55,
    isFollowed: true,
    caption: "Kal se gym. Aaj wala kal 6 mahine se chal raha.",
    video: "./video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    ismuted: true,
    username: "codingPranav",
    likeCount: 4500,
    isLiked: false,
    commentCount: 120,
    shareCount: 30,
    isFollowed: true,
    caption: "React ka setState — ek rishta jaisa. Late update hota hai.",
    video: "./video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    ismuted: true,
    username: "travelWithSimran",
    likeCount: 17700,
    isLiked: true,
    commentCount: 740,
    shareCount: 210,
    isFollowed: false,
    caption: "Enjoying on JetSki in Dubai. #Dubai #Travel",
    video: "./video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    ismuted: true,
    username: "foodieKaran",
    likeCount: 8000,
    isLiked: false,
    commentCount: 190,
    shareCount: 41,
    isFollowed: true,
    caption: "Yeh momo nahi, mera comfort zone hai.",
    video: "./video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  },
  {
    ismuted: true,
    username: "devGirlAnanya",
    likeCount: 15900,
    isLiked: true,
    commentCount: 510,
    shareCount: 160,
    isFollowed: false,
    caption: "Deploy fail hua. Fir se zindagi sochni padi.",
    video: "./video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    ismuted: true,
    username: "sarcasticSam",
    likeCount: 22100,
    isLiked: true,
    commentCount: 880,
    shareCount: 300,
    isFollowed: false,
    caption: "Log bolte time heals. Par kabhi kabhi time hi maar deta.",
    video: "./video7.mp4",
    userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    ismuted: true,
    username: "danceWithTara",
    likeCount: 9900,
    isLiked: false,
    commentCount: 260,
    shareCount: 70,
    isFollowed: true,
    caption: "Steps sahi karne se pehle confidence sahi hona chahiye.",
    video: "./video8.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    ismuted: true,
    username: "highnote",
    likeCount: 3401,
    isLiked: true,
    commentCount: 95,
    shareCount: 20,
    isFollowed: true,
    caption: "Aaj DSA samajh aaya. Kal bhool jaunga. Cycle continues.",
    video: "./video9.mp4",
    userprofile: "https://images.unsplash.com/photo-1546456074-92a088c1ea8c",
  },
  {
    ismuted: true,
    username: "motivationSana",
    likeCount: 18800,
    isLiked: true,
    commentCount: 660,
    shareCount: 250,
    isFollowed: false,
    caption: "Discipline > Motivation. Har baar.",
    video: "./video10.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var sum = "";
  reels.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="reel">
          <video autoplay loop ${elem.ismuted ? "muted" : ""} src="${
        elem.video
      }"></video>
          <div class="mute" id=${idx}>
          ${
            elem.ismuted
              ? '<i class="ri-volume-mute-fill"></i>'
              : '<i class="ri-volume-up-line"></i>'
          }
      
    </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button id=${idx} class='follow'>${
        elem.isFollowed ? "Unfollow" : "Follow"
      }</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${
                elem.isLiked
                  ? '<i class="love ri-heart-3-fill"></i>'
                  : '<i class="ri-heart-3-line"></i>'
              }</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }

    addData();
  }
  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }

    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true;
    } else {
      reels[dets.target.id].ismuted = false;
    }
    addData();
  }
});
