const fs = require('fs')

function getAll(){
    var name =fs.readdirSync(__dirname)
    for (let i=0;i<name.length;i++){
        if(name[i]=='.git'||name[i]=='README.md'||name[i]=='aa.js'){
            name.splice(i,1)
        } 
    }
    return name
}
function main(){
    var name=getAll()
    var time = new Date();
    var txt=`
 
## 提交格式及规则

* 新建一个自己名字命名的文件夹

* 每周日提交周报名称按照 0710.md格式（不合规名称识别不到）

* 每周三生成一次文档

## 周报内容

* 学习内容
* 学习成果展示
* 吐槽
## 要求

**每周必须提交就算没学就随便写点**

例：

         			吐槽
    	睡了一个星期，什么都没学，不过爽死了

* 格式自定
* 有周报遗忘必须先补完才能写下周不然不算

**文档生成时间：${time.getMonth()+1}/${time.getDate()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}**
<center><b>暑期周报完成情况</b></center>
   
| 姓名 | 0710 |0717|0724|0731|0807|0814|0821|0828|
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | `
    for(let i=1;i<name.length;i++){
        txt=txt+`\n|${name[i]}|`
        var fileMd=fs.readdirSync(__dirname+"/"+name[i])
        for (let k=0;k<8;k++){
            if(!fileMd[k]){
                fileMd.push(0)
            }
        }
        // console.log(fileMd);
            if(fileMd[0]=='0710.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[1]=='0717.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[2]=='0724.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[3]=='0731.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[4]=='0807.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[5]=='0814.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[6]=='0821.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
            if(fileMd[7]=='0828.md'){
                txt=txt+`✅|`
            }
            else{
                txt=txt+'|'
            }
    }
    fs.writeFile('README.md',txt,()=>{})
     console.log(txt);
}
main()
