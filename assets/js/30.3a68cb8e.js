(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{516:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、-拉取-mongodb-官方-docker-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-拉取-mongodb-官方-docker-镜像"}},[s._v("#")]),s._v(" 一、 拉取 "),a("code",[s._v("MongoDB")]),s._v(" 官方 "),a("code",[s._v("docker")]),s._v(" 镜像")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker pull mongo:4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看下载的镜像")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\ndocker images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行结果：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images")]),s._v("\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nmongo               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("                   409c3f937574        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" days ago         493MB\nmongo-express       latest              323f84fbaf9b        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" weeks ago         130MB\nregistry            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                   2d4f4b5309b1        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(".2MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"二、启动-mongodb-服务器容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、启动-mongodb-服务器容器"}},[s._v("#")]),s._v(" 二、启动 "),a("code",[s._v("MongoDB")]),s._v(" 服务器容器")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run --name mongo4 -v /mongodb/data:/data/db -d mongo:4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("--name")]),s._v(" 指定 "),a("code",[s._v("docker")]),s._v(" 容器的名字为 "),a("code",[s._v("mongo4")])]),s._v(" "),a("li",[a("code",[s._v("-v")]),s._v(" 将本地 "),a("code",[s._v("/mongodb/data")]),s._v(" 挂载到容器环境的 "),a("code",[s._v("/data/db")]),s._v("(即"),a("code",[s._v("MongoDB保存数据的位置")]),s._v(")")]),s._v(" "),a("li",[a("code",[s._v("-d")]),s._v(" 后台运行 "),a("code",[s._v("docker")]),s._v(" 进程")])]),s._v(" "),a("p",[s._v("查看 "),a("code",[s._v("docker")]),s._v(" 容器状态")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\ndocker container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行结果：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\nebd63a30b9ce        mongo:4             "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" seconds ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" seconds        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("/tcp                mongo4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"三、mongo-express-网页版的-mongodb-数据库管理系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、mongo-express-网页版的-mongodb-数据库管理系统"}},[s._v("#")]),s._v(" 三、"),a("code",[s._v("mongo-express")]),s._v(" 网页版的 "),a("code",[s._v("MongoDB")]),s._v(" 数据库管理系统")]),s._v(" "),a("p",[s._v("拉取 "),a("code",[s._v("mongo-express")]),s._v(" 镜像")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker pull mongo-express\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行 "),a("code",[s._v("mongo-express")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run --link mongo4:mongo -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 mongo-express\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("--link")]),s._v(" 连接到 "),a("code",[s._v("mongo4")]),s._v("容器的 "),a("code",[s._v("mongo")]),s._v(" 程序")]),s._v(" "),a("li",[a("code",[s._v("-p")]),s._v(" 指定访问 "),a("code",[s._v("mongo-express")]),s._v(" 的 "),a("code",[s._v("HTTP")]),s._v(" 端口")])]),s._v(" "),a("p",[s._v("运行结果：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run --link mongo4:mongo -p 8081:8081 mongo-express")]),s._v("\nWaiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mongo:27017"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nWelcome to mongo-express\n------------------------\n\n\nMongo Express server listening at http://0.0.0.0:8081\nServer is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" to allow connections from anyone "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nbasicAuth credentials are "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin:pass"')]),s._v(", it is recommended you change this "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your config.js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nDatabase connected\nAdmin Database connected\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("浏览器访问 "),a("code",[s._v("8081")]),s._v(" 端口，可进入数据库的管理界面")]),s._v(" "),a("h2",{attrs:{id:"四、运行-mongo-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、运行-mongo-shell"}},[s._v("#")]),s._v(" 四、运行 "),a("code",[s._v("Mongo Shell")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -i -t mongo4 mongo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行结果：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it mongo4 mongo")]),s._v("\nMongoDB shell version v4.4.0\nconnecting to: mongodb://127.0.0.1:27017/?compressors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gssapiServiceName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mongodb\nImplicit session: session "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"367a12f1-2201-4b20-be59-99163728ce84"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMongoDB server version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(".0\nWelcome to the MongoDB shell.\nFor interactive help, "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" comprehensive documentation, see\n\thttps://docs.mongodb.com/\nQuestions? Try the MongoDB Developer Community Forums\n\thttps://community.mongodb.com\n---\nThe server generated these startup warnings when booting:\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-09-02T15:53:58.794+00:00: Access control is not enabled "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the database. Read and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" access to data and configuration is unrestricted\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-09-02T15:53:58.797+00:00: /sys/kernel/mm/transparent_hugepage/enabled is "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'always'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" We suggest setting it to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'never'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-09-02T15:53:58.797+00:00: /sys/kernel/mm/transparent_hugepage/defrag is "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'always'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" We suggest setting it to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'never'")]),s._v("\n---\n---\n        Enable MongoDB's "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" cloud-based monitoring service, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" will "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" receive and display\n        metrics about your deployment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("disk utilization, CPU, operation statistics, etc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\n        The monitoring data will be available on a MongoDB website with a unique URL accessible to you\n        and anyone you share the URL with. MongoDB may use this information to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" product\n        improvements and to suggest MongoDB products and deployment options to you.\n\n        To "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" monitoring, run the following command: db.enableFreeMonitoring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        To permanently disable this reminder, run the following command: db.disableFreeMonitoring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("上面的运行结果，表示成功执行 "),a("code",[s._v("mongo4")]),s._v(" 容器的 "),a("code",[s._v("mongo")]),s._v(" 程序，并且可以，交互式的在 "),a("code",[s._v("mongo shell")]),s._v(" 中执行命令")]),s._v(" "),a("h2",{attrs:{id:"五、第一条-mongodb-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、第一条-mongodb-命令"}},[s._v("#")]),s._v(" 五、第一条 "),a("code",[s._v("MongoDB")]),s._v(" 命令")]),s._v(" "),a("p",[s._v("查看所有数据库")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("show databases\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行结果：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show databases\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);