import React, {useRef} from 'react';
import {StyleSheet, Animated, View, Text, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  menus: {
    flexDirection: 'row',
    flexBasis: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    borderStyle: 'solid',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    height: 40,
  },
  scrollItem: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    lineHeight: 40,
  },
  scrollItemShadow: {
    position: 'absolute',
    bottom: 0,
    width: 28,
    height: 2,
    backgroundColor: '#fb7299',
  },
  arrow: {
    flexBasis: 40,
    alignItems: 'center',
  },
});
function Tabs() {
  const list = [
    {url: 'https://m.bilibili.com/', title: '首页'},
    {url: 'https://m.bilibili.com/channel/1', title: '动画'},
    {url: 'https://m.bilibili.com/channel/13', title: '番剧'},
    {url: 'https://m.bilibili.com/channel/167', title: '国创'},
    {url: 'https://m.bilibili.com/channel/3', title: '音乐'},
    {url: 'https://m.bilibili.com/channel/129', title: '舞蹈'},
    {url: 'https://m.bilibili.com/channel/4', title: '游戏'},
    {url: 'https://m.bilibili.com/channel/36', title: '知识'},
    {url: 'https://m.bilibili.com/channel/188', title: '数码'},
    {url: 'https://m.bilibili.com/channel/223', title: '汽车'},
    {url: 'https://m.bilibili.com/channel/160', title: '生活'},
    {url: 'https://m.bilibili.com/channel/211', title: '美食'},
    {url: 'https://m.bilibili.com/channel/217', title: '动物圈'},
    {url: 'https://m.bilibili.com/channel/119', title: '鬼畜'},
    {url: 'https://m.bilibili.com/channel/155', title: '时尚'},
    {url: 'https://m.bilibili.com/channel/5', title: '娱乐'},
    {url: 'https://m.bilibili.com/channel/181', title: '影视'},
    {url: 'https://m.bilibili.com/channel/177', title: '纪录片'},
    {url: 'https://m.bilibili.com/channel/23', title: '电影'},
    {url: 'https://m.bilibili.com/channel/11', title: '电视剧'},
    {url: 'https://live.bilibili.com/h5/', title: '直播'},
    {url: 'https://h.bilibili.com/ywh/h5/home#/draw', title: '相簿'},
  ];
  let scorllItemWidList = [];
  // 组件渲染时获取列表布局，取得尺寸数据
  const getLayout = layout => {
    scorllItemWidList.push({
      x: layout.nativeEvent.layout.x,
      width: layout.nativeEvent.layout.width,
    });
  };
  const scrollRef = useRef(null);
  const flyAnim = useRef(new Animated.Value(15)).current;
  const widAnim = useRef(new Animated.Value(28)).current;
  const toLink = inx => {
    const scrollItemShadowDiffLeft = scorllItemWidList[inx].x + 15;
    const scrollItemShadowDiffWidth = scorllItemWidList[inx].width - 30;
    const xDiff = scorllItemWidList[inx].x - scorllItemWidList[inx].width * 3;
    scrollRef.current.scrollTo({
      x: xDiff > 0 ? xDiff : 0,
      y: 0,
      animated: true,
    });
    Animated.timing(flyAnim, {
      toValue: scrollItemShadowDiffLeft,
      duration: 0,
    }).start();
    Animated.timing(widAnim, {
      toValue: scrollItemShadowDiffWidth,
      duration: 0,
    }).start();
  };
  return (
    <View style={styles.menus}>
      <ScrollView
        ref={scrollRef}
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {list.map((item, inx) => (
          <Text
            key={item.title}
            style={styles.scrollItem}
            onLayout={event => getLayout(event)}
            onPress={() => toLink(inx)}>
            {item.title}
          </Text>
        ))}
        <Animated.View
          style={[
            styles.scrollItemShadow,
            {
              width: widAnim,
              transform: [
                {
                  translateX: flyAnim,
                },
              ],
            },
          ]}
        />
      </ScrollView>
      <View style={styles.arrow}>
        <FontAwesome name="angle-down" size={25} color="#aaa" />
      </View>
    </View>
  );
}
export default Tabs;
