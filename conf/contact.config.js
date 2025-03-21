/**
 * 社交按钮相关的配置同意放这
 */
module.exports = {
  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || 'https://www.instagram.com/liam_zhengh?igsh=OGQ5ZDc2ODk2ZA==', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || 'https://www.youtube.com/@Liam-Night-Life', // Youtube主页
  CONTACT_TIKTOK: process.env.NEXT_PUBLIC_CONTACT_TIKTOK || 'https://v.douyin.com/UAxKQCy/d', // Tiktok主页
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || 'https://www.xiaohongshu.com/user/profile/609833d30000000001007e0b?xhsshare=CopyLink&appuid=609833d30000000001007e0b&apptime=1714647466', // 小红书主页
  CONTACT_WEIXIN: process.env.NEXT_PUBLIC_CONTACT_WEIXIN || 'https://liamthai.club/WeChat', // 微信主页
  CONTACT_LINE: process.env.NEXT_PUBLIC_CONTACT_LINE || 'https://line.me/ti/p/85Hl6n8t71' ,  // line主页
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '' // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect
}
