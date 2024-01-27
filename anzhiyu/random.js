var posts=["posts/56424/","posts/17463/","posts/37494/","posts/28074/","posts/9230/","posts/64940/","posts/32619/","posts/23187/","posts/37873/","posts/3d464277/","posts/26006/","posts/35494/","posts/59255/","posts/47511/","posts/43837/","posts/51799/","posts/27852/","posts/32748/","posts/50003/","posts/c9a0f0cf/","posts/37930/","posts/34123/","posts/26963/","posts/b88ed928/","posts/65362/","posts/7903/","posts/46332/","posts/8407109a/","posts/32663/","posts/20560/","posts/16440/","posts/29253/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"王卓Sco","link":"https://blog.wzsco.top/","avatar":"https://bu.dusays.com/2023/12/19/658179febbfb5.png","descr":"宁静致远，热爱生活。"},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活"},{"name":"echeverra","link":"https://echeverra.cn","avatar":"https://echeverra.cn/favicon.jpg","descr":"let's go, together!"},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://s11.ax1x.com/2023/05/26/p9qChjI.jpg","descr":"有肉有猫有生活."},{"name":"Shine","link":"https://blog.shineyu.cn/","avatar":"https://s3.bmp.ovh/imgs/2022/11/23/129c19d56d22c637.png","descr":"热爱生活点滴，分享时刻精彩。","siteshot":"https://s3.bmp.ovh/imgs/2022/12/28/fe2452f7c4ff48ee.png"},{"name":"CC康纳百川","link":"https://blog.ccknbc.cc","avatar":"https://jsd.cdn.zzko.cn/gh/ccknbc-backup/cdn/logo/ccknbc.png","descr":"CC康纳百川的小窝"},{"name":"湘铭`Blog","link":"https://blog.xiangming.site/","avatar":"https://photo.xiangming.site/img/icologo.png","descr":"听闻余生，相濡以沫💕"},{"name":"朝而往","link":"https://muerg.cn/","avatar":"https://image.muerg.cn/i/2023/05/01/644f6cebafd3d.jpg","descr":"四时之景不同，而乐亦无穷也。"},{"name":"Mxne","link":"https://blog.mxne.cn/","avatar":"https://bu.dusays.com/2023/02/05/63df7de56a470.webp","descr":"学如逆水行舟，不进则退。"},{"name":"Eurkon","link":"https://blog.eurkon.com","avatar":"https://blog.eurkon.com/images/user/avatar.jpg","descr":"及时当勉励，岁月不待人。"},{"name":"ichika","link":"https://ichika.cc","avatar":"https://cdn.ichika.cc/page/HeadIcon.jpg","descr":"Hello,gamer!"},{"name":"haloged","link":"https://haloged.eu.org","avatar":"https://haloged.github.io/haloged1/12123.png","descr":"一只鸽子の博客"},{"name":"雨夜回廊","link":"https://myql.eu.org/","avatar":"https://haloged.github.io/haloged1/12123.png","descr":"青天白日梦神仙"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };