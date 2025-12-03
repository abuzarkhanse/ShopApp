// src/screens/HomeScreen.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const BLUE = '#0063CC';

type TopSellingProduct = {
  id: string;
  title: string;
  itemsLabel: string;
  price: number;
};

const CATEGORIES = [
  { id: 'men', label: 'MEN' },
  { id: 'women', label: 'WOMEN' },
  { id: 'kids', label: 'KIDS' },
  { id: 'offer', label: 'OFFER ZONE' },
];

const TOP_SELLINGS: TopSellingProduct[] = [
  { id: '1', title: 'Women Jeans', itemsLabel: '123 Items', price: 40 },
  { id: '2', title: 'Men’s T Shirts', itemsLabel: '420 Items', price: 25 },
  { id: '3', title: 'Running Shoes', itemsLabel: '85 Items', price: 65 },
  { id: '4', title: 'Nike Tracksuits', itemsLabel: '45 Items', price: 90 },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenProduct = (productId: string) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const handleAddToCart = (product: TopSellingProduct) => {
    Alert.alert(
      'Added to cart',
      `${product.title} has been added to your cart.`,
    );
  };

  const handleLogout = () => {
    setMenuOpen(false);
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* HEADER / HERO */}
        <View style={styles.header}>
          {/* Top row icons */}
          <View style={styles.headerTopRow}>
            <View style={styles.headerLeft}>
              <TouchableOpacity
                style={styles.menuIconWrapper}
                onPress={() => setMenuOpen(!menuOpen)}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>HOME</Text>
            </View>

            <View style={styles.headerRight}>
              {/* Bell with badge */}
              <View style={styles.iconWrapper}>
                <Text style={styles.iconText}>🔔</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>

              {/* Cart */}
              <View style={styles.iconWrapper}>
                <Text style={styles.iconText}>🛍️</Text>
              </View>

              {/* Three dots */}
              <View style={styles.iconWrapper}>
                <Text style={styles.iconText}>⋮</Text>
              </View>
            </View>
          </View>

          {/* Hero content */}
          <View style={styles.heroContent}>
            <View style={styles.heroTextBlock}>
              <Text style={styles.heroTitle}>NEW{'\n'}ARRIVALS</Text>
              <Text style={styles.heroSubtitle}>200+ New Items</Text>
              <TouchableOpacity style={styles.shopItWrapper}>
                <Text style={styles.shopItText}>Shop it →</Text>
              </TouchableOpacity>
            </View>

            {/* Hero image on right – replace with your actual image */}
            <View style={styles.heroImageWrapper}>
              <Image
                source={require('../../assets/images/3_home.png')}
                style={styles.heroImage}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Slider dots */}
          <View style={styles.sliderDotsRow}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* CATEGORY AVATARS */}
        <View style={styles.categoriesRow}>
          {CATEGORIES.map(cat => (
            <View key={cat.id} style={styles.categoryItem}>
              <View style={styles.categoryAvatar}>
                <Text style={styles.categoryAvatarLetter}>
                  {cat.label.charAt(0)}
                </Text>
              </View>
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>

        {/* SUMMER OFFER BANNER */}
        <View style={styles.offerCard}>
          <View style={styles.offerInner}>
            <View style={styles.offerImageBox}>
              <Text style={styles.offerEmoji}>🏖️</Text>
            </View>

            <View style={styles.offerTextBox}>
              <Text style={styles.offerTitle}>SUMMER OFFER</Text>
              <Text style={styles.offerBigText}>50–70%</Text>
              <Text style={styles.offerBigText}>OFF</Text>
            </View>
          </View>
        </View>

        {/* TOP SELLINGS TITLE */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TOP SELLINGS</Text>
        </View>

        {/* TOP SELLINGS GRID */}
        <View style={styles.grid}>
          {TOP_SELLINGS.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              activeOpacity={0.8}
              onPress={() => handleOpenProduct(item.id)}
            >
              <View style={styles.productImageBox}>
                <Text style={styles.productEmoji}>🛒</Text>
              </View>

              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productItems}>{item.itemsLabel}</Text>

              <View style={styles.priceAndButtonRow}>
                <Text style={styles.productPrice}>
                  ${item.price.toFixed(2)}
                </Text>

                <TouchableOpacity
                  style={styles.cardAddButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.cardAddButtonText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* SIMPLE OVERLAY MENU FOR LOGOUT */}
      {menuOpen && (
        <TouchableOpacity
          style={styles.menuOverlay}
          activeOpacity={1}
          onPress={() => setMenuOpen(false)}
        >
          <View style={styles.menuPanel}>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },

  /* HEADER */
  header: {
    backgroundColor: BLUE,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconWrapper: {
    marginRight: 8,
  },
  menuIcon: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: 10,
    position: 'relative',
  },
  iconText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: '#27AE60',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroTextBlock: {
    flex: 1,
    paddingRight: 10,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 30,
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 4,
  },
  shopItWrapper: {
    marginTop: 10,
  },
  shopItText: {
    color: '#00FFAA',
    fontSize: 14,
  },
  heroImageWrapper: {
    width: 130,
    height: 160,
    overflow: 'hidden',
    borderRadius: 4,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  sliderDotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#FFFFFF',
  },

  /* CATEGORIES */
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  categoryAvatarLetter: {
    fontSize: 22,
    fontWeight: '700',
    color: '#555555',
  },
  categoryLabel: {
    fontSize: 12,
    color: '#555555',
  },

  /* OFFER CARD */
  offerCard: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#00000022',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  offerInner: {
    flexDirection: 'row',
    padding: 14,
    borderWidth: 1,
    borderColor: '#2ECC71',
    borderRadius: 6,
    backgroundColor: '#FFFDF5',
  },
  offerImageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerEmoji: {
    fontSize: 40,
  },
  offerTextBox: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  offerTitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 4,
  },
  offerBigText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F2C94C',
    lineHeight: 26,
  },

  /* TOP SELLINGS */
  sectionHeader: {
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: BLUE,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#00000022',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingBottom: 12,
  },
  productImageBox: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    marginBottom: 10,
  },
  productEmoji: {
    fontSize: 40,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  productItems: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'center',
    marginTop: 4,
  },
  priceAndButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: BLUE,
  },
  cardAddButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#2ECC71',
  },
  cardAddButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  /* MENU OVERLAY */
  menuOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuPanel: {
    marginTop: 60,
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 8,
    width: 150,
    elevation: 4,
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  menuItemText: {
    fontSize: 14,
    color: '#333333',
  },
});
