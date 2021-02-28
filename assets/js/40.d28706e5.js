(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{526:function(s,e,a){"use strict";a.r(e);var t=a(6),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、安装-remote-ssh-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装-remote-ssh-插件"}},[s._v("#")]),s._v(" 一、安装 Remote-SSH 插件")]),s._v(" "),a("ul",[a("li",[s._v("在插件市场，找到 "),a("code",[s._v("Remote-SSH")]),s._v(" 并安装")]),s._v(" "),a("li",[s._v("安装成功后，会在左侧功能区多出一个功能选项")])]),s._v(" "),a("h2",{attrs:{id:"二、remote-ssh-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、remote-ssh-配置"}},[s._v("#")]),s._v(" 二、Remote-SSH 配置")]),s._v(" "),a("ul",[a("li",[s._v("进入功能选项，点击 "),a("code",[s._v("configure")]),s._v("（小齿轮）")]),s._v(" "),a("li",[s._v("选择 "),a("code",[s._v("C:\\Users\\administrator\\.ssh\\config")])]),s._v(" "),a("li",[s._v("添加配置项\n"),a("ul",[a("li",[s._v("Host 连接的别名")]),s._v(" "),a("li",[s._v("User 登录远程服务的用户名")]),s._v(" "),a("li",[s._v("Hostname 远程 IP 地址， 填写自己的 IP 地址")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host 腾讯云\nUser root\nHostname 192.168.1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[s._v("添加完配置后，会在左侧连接列表中多出一个连接项")]),s._v(" "),a("li",[s._v("点击连接项右侧的 "),a("code",[s._v("Connect to Host in New Window")]),s._v(" 会重新打开一个新的 vscode 进程")]),s._v(" "),a("li",[s._v("在新打开的 vscode 界面中，会有一个选择项，选择 "),a("code",[s._v("Linux")])]),s._v(" "),a("li",[s._v("接着需要输入云服务器的的密码，这样就可以连接上远程主机了")]),s._v(" "),a("li",[s._v("在左侧目录区，点击 "),a("code",[s._v("打开文件夹")]),s._v(" 可以选择要使用 vscode 编辑的目录，但是还需要重新输入密码")])]),s._v(" "),a("h2",{attrs:{id:"三、免密登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、免密登录"}},[s._v("#")]),s._v(" 三、免密登录")]),s._v(" "),a("ul",[a("li",[s._v("使用管理员身份打开 "),a("code",[s._v("PowerShell")])]),s._v(" "),a("li",[s._v("进入用户根目录"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("code",[s._v("ssh-keygen")]),s._v(" 生成本地私钥和公钥 , 一路回车即可")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("进入 .shh 目录"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("将公钥上传到远程服务器, 运行以下命令，并输入密码，注意 填写自己 IP 地址")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("id_rsa.pub root@118.24.109.123:/root/.ssh/pubkey\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("xshell")]),s._v(" 或其它工具登录远程服务器，将"),a("code",[s._v("id_rsa.pub")]),s._v("公钥的内容, 追加到"),a("code",[s._v("authorized_keys")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/.ssh/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" pubkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" authorized_keys\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf pubkey\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样，以后使用本机"),a("code",[s._v("vscode")]),s._v("的"),a("code",[s._v("Remote-SSH")]),s._v("插件连接该云服务器时，就不需要输入密码了！")]),s._v(" "),a("h2",{attrs:{id:"四、使用-git-自带的-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、使用-git-自带的-ssh"}},[s._v("#")]),s._v(" 四、使用 git 自带的 ssh")]),s._v(" "),a("p",[s._v("打开 cmd, 查看 ssh 版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("显示的版本为： "),a("code",[s._v("OpenSSH_for_Windows_7.7p1")])]),s._v(" "),a("p",[s._v("配置系统环境变量\n将 "),a("code",[s._v("C:\\Program Files\\Git\\usr\\bin")]),s._v(" 添加到环境变量，并置于 "),a("code",[s._v("C:\\Windows\\System32\\OpenSSH\\")]),s._v(" 前面")]),s._v(" "),a("p",[s._v("重新打开 cmd 查看 ssh 版本, 修改后的版本为： "),a("code",[s._v("OpenSSH_8.0p1")])])])}),[],!1,null,null,null);e.default=n.exports}}]);