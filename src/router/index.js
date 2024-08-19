import {createWebHashHistory, createRouter} from 'vue-router'

import baseView from '@/layout/base-view'
import rightView from '@/layout/right-content'
import login from '@/page/login/login'
import index from '@/page/dashboard/index'
import postArticle from '@/page/content/post-article'
import manageArticle from '@/page/content/manage-article'
import manageComment from '@/page/content/manage-comment'
import manageImage from '@/page/content/manage-image'
import manageCategory from '@/page/operation/manage-category'
import loop from '@/page/operation/loop'
import friendLink from '@/page/settings/friend-link'
import websizeInfo from '@/page/settings/websize-info'
import email from '@/page/user/email'
import info from '@/page/user/info'
import list from '@/page/user/list'
import resetPassword from '@/page/user/reset-password'

export const routes = [
    {
        path: "",
        component: baseView,
        redirect: "/index",
        children: [
            {
                path: "/index",
                name: "首页",
                icon: "menu",
                hidden: false,
                component: index
            },
            {
                path: "/content",
                name: "内容",
                icon: "notebook",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "post-article",
                        name: "文章发表",
                        icon: "edit",
                        hidden: false,
                        component: postArticle
                    },
                    {
                        path: "manage-article",
                        name: "文章管理",
                        icon: "document",
                        hidden: false,
                        component: manageArticle
                    },
                    {
                        path: "manage-comment",
                        name: "评论管理",
                        icon: "chat-line-round",
                        hidden: false,
                        component: manageComment
                    },
                    {
                        path: "manage-image",
                        name: "图片管理",
                        icon: "picture",
                        hidden: false,
                        component: manageImage
                    }
                ]
            },
            {
                path: "/user",
                name: "用户",
                icon: "user",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "list",
                        name: "用户列表",
                        icon: "user-filled",
                        hidden: false,
                        component: list
                    },
                    {
                        path: "reset-password",
                        name: "密码重置",
                        icon: "unlock",
                        hidden: false,
                        component: resetPassword
                    },
                    {
                        path: "email",
                        name: "用户邮箱",
                        icon: "message",
                        hidden: false,
                        component: email
                    },
                    {
                        path: "info",
                        name: "用户信息",
                        icon: "files",
                        hidden: false,
                        component: info
                    }
                ]
            },
            {
                path: "/operation",
                name: "运营",
                icon: "set-up",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "loop",
                        name: "轮播图管理",
                        icon: "film",
                        hidden: false,
                        component: loop
                    },
                    {
                        path: "manage-category",
                        name: "分类管理",
                        icon: "more",
                        hidden: false,
                        component: manageCategory
                    }
                ]
            },
            {
                path: "/settings",
                name: "设置",
                icon: "setting",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "websize-info",
                        name: "网站信息",
                        icon: "data-line",
                        hidden: false,
                        component: websizeInfo
                    },
                    {
                        path: "friend-link",
                        name: "友情链接",
                        icon: "link",
                        hidden: false,
                        component: friendLink
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        component: login
    }];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;