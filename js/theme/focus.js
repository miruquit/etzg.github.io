/* 
 * hexo theme meow
 * page focus scripts
 */

const initPageFocus = () => {
  let origin_title = document.title;
  let timer;
  // 从 GLOBALCONFIG 读取配置
  const onblurText = GLOBALCONFIG.onblur_title;
  const onfocusText = GLOBALCONFIG.onfocus_title || "ヾ(^▽^*)))欢迎回来！";  // 如果没配置则使用默认值

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      // 离开标签页：显示 onblur_title
      document.title = onblurText;
      clearTimeout(timer);
    } else {
      // 回到标签页：显示 onfocus_title，3秒后恢复原标题
      document.title = onfocusText;
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.title = origin_title;
      }, 3000);
    }
  });
};

export default initPageFocus;