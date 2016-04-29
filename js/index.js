/*

Simple blog front end demo in order to learn AngularJS - You can add new posts, add comments, and like posts.

*/

(function(){
  var app = angular.module('blogApp',[]);
  
  app.controller('BlogController', ['$http', function($http){
    
    var blog = this;
    blog.title = "BlogInTheAir";
    
    blog.posts = {};
    blog.posts = [
  {
        "title": "The Strongest is Real",
        "body": [
          "做梦的 醒来的， 沉默着 躁动着， 世界再大 人会迷路， 要么庸俗 要么孤独。",
          "一个安静的下午 一场突然的离开， 想一去不回的冒险 像远方住着另一个自己。",
          "睡在哪里都是睡在夜里， 听一路的声音。",
          "着迷的画面 今天 明天， 落幕 又会上演。" 
          ],
        "author": "Jeremy Inside",
        "comments": [
          {
            "body":"Nice place and handsome gay!",
            "author": "trollguy87"
          }
        ],
        "likes":0,
        "image":"https://s3-us-west-1.amazonaws.com/xiangtingblogimg/levi.JPG",
        "createdOn":1408547127216
  },
  {
        "title": "How to be a Gentleman",
        "body": [
            "好久没见了什么角色呢 细心装扮着， 白色衬衫的的袖口是你送的 尽量表现着像不在意的， 频繁暴露了自欺欺人者。越掩饰越深刻 你说我说听说 忍着言不由衷的段落 我反正决定自己难过。",
            "我只想摸你的头发 只是简单的试探啊， 我想给你个拥抱 像以前可以吗， 你退半步的动作认真的吗 小小的动作伤害海那么大 我只能扮演个绅士 才能和你说说话。",
            "我能送你回家吗 可能外面要下雨啦， 我能给你个拥抱 像朋友一样可以吗， 我忍不住从背后抱了下 尺度掌握在不能说想你啊， 你就当刚认识的绅士 闹了个笑话吧。",
            "你能给我只左手 牵你到马路那头吗， 我会像以前一样 看着来往的车子啊， 我们的距离在眉间皱了下 迅速还原成路人的样子啊， 越有礼貌我越害怕 绅士要放得下。"
          ],
        "author": "Jeremy Inside",
        "comments": [
          {
            "body":"一个人能有多不正经就能有多深情。",
            "author": "JeremyInside"
          }
        ],
        "likes":0,
        "image":"https://s3-us-west-1.amazonaws.com/xiangtingblogimg/yanzu.jpg",
        "createdOn":1408547127216
  },

{
        "title": "#1 of the World",
        "body": [
            "南方的城里住着一个北方的爷们 他总是喜欢穿着带花的裤衩蹲在路旁 他的钱不多但笑起来是那么猥琐放荡 他干净的裤兜里装的是什么是高富帅的忧伤。",
            "北方的小镇有暖气的冬天没有南方冷 他不需要两床的棉被去遮盖他裸睡的身体 他在来去的街头留下烟头影子才会默然的凄凉 眨眼的时间烟头已熄灭影子已不见。",
            "北方爷们 你是否习惯南方的高温 北方爷们 你是否喜欢南方妞的湿润。",
            "日子过的就像那些不眠的晚上 他抽着芙蓉王对墙满谈着理想， 北方爷们 我们都在忍受着漫长， 北方爷们 是不是高楼遮住了你的希望。",
            "昨日的宝马也带走了他仅有的姑娘 夜里的歌声也没有让她找到迷途的方向， 阳光里他在院子中央眯着眼眺望， 在四季的风中他喝着啤酒安慰着时光。",
            "北方爷们 你是否爱上了南方 北方爷们 你说今天你就要带她回到家乡， 思念让人心伤她呼唤着你的泪光 北方的高粱已熟那是你简单的理想。",
            "啦 啦啦啦 啦 啦啦啦"
          ],
        "author": "Jeremy Inside",
        "comments": [
          {
            "body":"在我的记忆中，有一朵紫罗兰熠熠生辉。",
            "author": "JeremyInside"
          }
        ],
        "likes":0,
        "image":"https://s3-us-west-1.amazonaws.com/xiangtingblogimg/yushao.JPG",
        "createdOn":1408547127216
  },

{
        "title": "Lost from Utopia",
        "body": [
            "她发现孤独的人准备动身 于是就祷告着 黄昏， 直到夜里她转头听见 悲伤的呜咽 一个善良的女子 长发垂肩。她已跟随黄昏 来临。翠绿的衣裳在炉火中 化为灰烬。升起的火焰一直烧到 黎明。一直到那女子 推开门离去。她自言自语。",
            "在离这很远的地方 有一片海滩， 孤独的人他就在海上 撑着船帆， 如果你看到他 回到海岸， 就请你告诉他你的名字 我的名字。",
            "她已 来临，翠绿的衣裳在炉火中 化为灰烬， 升起火焰一直烧到 黎明， 一直到那女子 推开门离去， 她自言自语。",
            "在离这很远的地方 有一片海滩， 孤独的人他就在海上 撑着船帆， 如果你看到他 回到海岸， 就请你告诉他你的名字 我的名字。在离这很远的地方 有一片海滩， 孤独的人他就在海上 撑着船帆， 如果你看到他 回到海岸， 就请你告诉他你的名字 我的名字。",
            "莉莉安。",
            "他们在别有用心的生活里 翩翩起舞， 你在我后半生的城市里 翩翩起舞，明天冰雪封山的时候 我也光着双脚， 站在你翻山越岭的尽头 正当年少， 两千个秘密 没人知道。"
          ],
        "author": "Jeremy Inside",
        "comments": [
          {
            "body":"苦海 泛起爱恨 在世间 难逃避命运 相亲 竟不可接近 或我应该 相信 是缘分。",
            "author": "JeremyInside"
          }
        ],
        "likes":0,
        "image":"https://s3-us-west-1.amazonaws.com/xiangtingblogimg/ziji.JPG",
        "createdOn":1408547127216
  }


];
    
    blog.tab = 'blog';
    
    blog.selectTab = function(setTab){
      blog.tab = setTab;
      console.log(blog.tab)
    };
    
    blog.isSelected = function(checkTab){
      return blog.tab === checkTab;
    };
    
    blog.post = {};
    blog.addPost = function(){
      blog.post.createdOn = Date.now();
      blog.post.comments = [];
      blog.post.likes = 0;
      blog.posts.unshift(this.post);
      blog.tab = 0;
      blog.post ={};
    };   
    
  }]);
  
  app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });
 
})();