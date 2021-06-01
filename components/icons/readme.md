# 基于react-native-vector-icons自定义icons
1.安装react-native-vector-icons并按官网步骤配置好  
2.从iconfont.cn下载自定义的图标代码  
3.从下载的目录里找到iconfont.ttf  
4.将iconfont.ttf拷贝到android/app/src/main/assets/fonts  
5.创建iconfont.json,拷贝所需图标的Unicode代码，例如  
```
{
  "logo": 59060
}

```  
6.创建自定义的图标组件Icons.js,如  
```
/**
 * Icons icon set component.
 * import Myions from 'Icons';
 * Usage: <Myions name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import iconfontMap from './iconfont.json';

const iconSet = createIconSet(iconfontMap, 'Icons', 'iconfont.ttf');

export default iconSet;
export const {Button, getImageSource, getImageSourceSync} = iconSet;

```  