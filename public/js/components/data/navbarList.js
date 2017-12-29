const html = [
    {
        href: "report", text: "我的常用月报告", dropdown: [
            {href: "report", id: "", text: "我的月报告"}
        ]
    },
    {
        href: "publicDataService", text: "我的公共数据服务", dropdown: [
            {href: "publicDataService", id: "", text: "统计"},
            {href: "pathNavigation", id: "", text: "我的路径导航"},
            {href: "pathNavigationTime", id: "", text: "我的实时路径导航"},
            {href: "geocoding", id: "", text: "我的地理编码"},
            {href: "reverseGeocoding", id: "", text: "我的逆地理编码"},
            {href: "localSearch", id: "", text: "我的本地搜索"},
            {href: "trafficTransfer", id: "", text: "我的公交换乘"},
            {href: "coordinateTransform", id: "", text: "我的坐标转换"}
        ]
    },
    {
        href: "License", text: "我的许可", dropdown: [
            {href: "cloudLicense", id: "", text: "我的云许可"},
            {href: "trialLicense", id: "", text: "我的离线试用许可"},
            {href: "mobileLicense", id: "", text: "我的移动许可"}
        ]
    }, {
        href: "onlineMap", text: "我的在线地图", dropdown: [
            {href: "onlineMap", id: "", text: "统计"},
            {href: "baseMap", id: "", text: "我的基础底图"},
            {href: "imageMap", id: "", text: "我的影像底图"}
        ]
    },
    {
        href: "other", text: "其他", dropdown: [
            {href: "realspace", id: "", text: "我的三维数据"},
            {href: "sso", id: "", text: "SSO"},
            {href: "myUpload", id: "", text: "我的用户数据托管"},
            {href: "monitor", id: "", text: "我的数据监控"}
        ]
    },
    {
        href: "userInfo", text: "个人中心", dropdown: [
            {href: "manager", id: "", text: "权限管理"},
            {href: "userInfo", id: "", text: "个人信息"},
            {href: "userManager", id: "", text: "用户管理"},
            {href: "", id: "i_logout_a", text: "退出"}
        ]
    }
];
export default html;