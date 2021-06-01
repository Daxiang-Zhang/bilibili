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
