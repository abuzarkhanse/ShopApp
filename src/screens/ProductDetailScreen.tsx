import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const GREEN = '#2ECC71';
const BLUE = '#0063CC';
const LIGHT_GRAY = '#F2F2F2';
const TEXT_GRAY = '#777777';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];

const ProductDetailScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState<'red' | 'green' | 'blue'>(
    'red',
  );
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // demo only
    console.log('ADD TO CART pressed');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* IMAGE AREA */}
          <View style={styles.imageSection}>
            {/* Top overlay bar */}
            <View style={styles.topBar}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>{'‹'}</Text>
              </TouchableOpacity>

              <View style={styles.topRight}>
                <View style={styles.cartWrapper}>
                  <Text style={styles.cartIcon}>🛒</Text>
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>2</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Product image */}
            <Image
              source={require('../../assets/images/8_Product_description.png')}
              style={styles.productImage}
              resizeMode="contain"
            />

            {/* Search circle */}
            <View style={styles.searchCircle}>
              <Text style={styles.searchIcon}>🔍</Text>
            </View>

            {/* Slider dots */}
            <View style={styles.dotsRow}>
              <View style={styles.dotActive} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>

          {/* DETAILS SECTION */}
          <View style={styles.detailsSection}>
            {/* Title & likes */}
            <View style={styles.titleRow}>
              <View style={styles.flex1}>
                <Text style={styles.productName}>
                  Global Men’s Casual T-shirt
                </Text>
                <View style={styles.priceRow}>
                  <Text style={styles.priceNew}>$50</Text>
                  <Text style={styles.priceOld}>$70</Text>
                  <Text style={styles.discountText}>(33% off)</Text>
                </View>
              </View>

              <View style={styles.likesWrapper}>
                <TouchableOpacity onPress={() => setLiked(!liked)}>
                  <Text
                    style={liked ? styles.heartActive : styles.heartInactive}
                  >
                    ♥
                  </Text>
                </TouchableOpacity>
                <Text style={styles.likesText}>450 Likes</Text>
              </View>
            </View>

            <View style={styles.separator} />

            {/* Size selection */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionLabel}>Size</Text>
              <View style={styles.sizeRow}>
                {SIZES.map(size => {
                  const isActive = selectedSize === size;
                  return (
                    <TouchableOpacity
                      key={size}
                      style={
                        isActive ? styles.sizeCircleActive : styles.sizeCircle
                      }
                      onPress={() => setSelectedSize(size)}
                    >
                      <Text
                        style={
                          isActive ? styles.sizeTextActive : styles.sizeText
                        }
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={styles.separator} />

            {/* Color selection */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionLabel}>Color</Text>
              <View style={styles.colorRow}>
                {/* Red */}
                <TouchableOpacity
                  style={
                    selectedColor === 'red'
                      ? styles.colorOuterActive
                      : styles.colorOuter
                  }
                  onPress={() => setSelectedColor('red')}
                >
                  <View style={styles.colorCircleRed} />
                </TouchableOpacity>

                {/* Green */}
                <TouchableOpacity
                  style={
                    selectedColor === 'green'
                      ? styles.colorOuterActive
                      : styles.colorOuter
                  }
                  onPress={() => setSelectedColor('green')}
                >
                  <View style={styles.colorCircleGreen} />
                </TouchableOpacity>

                {/* Blue */}
                <TouchableOpacity
                  style={
                    selectedColor === 'blue'
                      ? styles.colorOuterActive
                      : styles.colorOuter
                  }
                  onPress={() => setSelectedColor('blue')}
                >
                  <View style={styles.colorCircleBlue} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.separator} />

            {/* Quantity */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionLabel}>Quantity</Text>
              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={handleMinus}
                >
                  <Text style={styles.qtyButtonText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qtyValue}>{quantity}</Text>

                <TouchableOpacity style={styles.qtyButton} onPress={handlePlus}>
                  <Text style={styles.qtyButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* ADD TO CART BAR */}
        <TouchableOpacity style={styles.addToCartBar} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 16,
  },

  /* IMAGE / TOP PART */
  imageSection: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 12,
  },
  topBar: {
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backArrow: {
    fontSize: 26,
    color: '#555555',
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartWrapper: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: 22,
    color: '#555555',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: '#27AE60',
    borderRadius: 10,
    paddingHorizontal: 4,
    minWidth: 18,
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  productImage: {
    width: '100%',
    height: 260,
  },
  searchCircle: {
    position: 'absolute',
    right: 18,
    top: 150,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    fontSize: 20,
    color: '#888888',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C0C0C0',
    marginHorizontal: 4,
  },

  /* DETAILS SECTION */
  detailsSection: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  flex1: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceNew: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginRight: 6,
  },
  priceOld: {
    fontSize: 16,
    color: '#FF5C5C',
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discountText: {
    fontSize: 14,
    color: '#FF5C5C',
  },
  likesWrapper: {
    alignItems: 'center',
  },
  heartInactive: {
    fontSize: 26,
    color: '#CCCCCC',
  },
  heartActive: {
    fontSize: 26,
    color: '#FF3B30',
  },
  likesText: {
    fontSize: 12,
    color: TEXT_GRAY,
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 16,
  },

  /* SECTIONS */
  sectionBlock: {
    marginBottom: 4,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 10,
  },

  /* SIZE */
  sizeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  sizeCircleActive: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  sizeText: {
    color: TEXT_GRAY,
    fontSize: 14,
  },
  sizeTextActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  /* COLOR */
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorOuter: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  colorOuterActive: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#DDDDDD',
    borderWidth: 2,
    borderColor: '#BBBBBB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  colorCircleRed: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#A62323',
  },
  colorCircleGreen: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#19C967',
  },
  colorCircleBlue: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#004EAD',
  },

  /* QUANTITY */
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  qtyButton: {
    width: 40,
    height: 36,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  qtyButtonText: {
    fontSize: 20,
    color: '#999999',
  },
  qtyValue: {
    fontSize: 16,
    marginHorizontal: 20,
    color: '#333333',
  },

  /* BOTTOM BAR */
  addToCartBar: {
    backgroundColor: GREEN,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
