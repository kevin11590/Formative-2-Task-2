import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// ==========================================
// BRANDING & COLOR PALETTE (From Logo)
// ==========================================
const COLORS = {
  background: '#0B0B10',
  cardBg: '#1A1A28',
  cardBorder: '#2D2D44',
  primaryPurple: '#7B1FA2', // Logo primary purple
  lightPurple: '#A855F7',   // Neon highlight
  accentPurple: '#C77DFF',
  white: '#FFFFFF',
  grayText: '#A1A1AA',
  lightGray: '#2A2A3C',
  errorRed: '#FF4D4D',
  successGreen: '#10B981',
};

// ==========================================
// DATA DEFINITIONS (From Screenshots)
// ==========================================
const PACKAGES_DATA = [
  {
    id: '1',
    title: 'Ultimate Gamer Pass',
    fee: 1500,
    category: 'Full Day Package',
    purpose: 'Unlimited gaming access for a full day.',
    includes: [
      'PC gaming',
      'Console gaming',
      'High-speed internet',
      'Snack voucher',
      'Tournament entry',
    ],
  },
  {
    id: '2',
    title: 'VIP Gaming Experience',
    fee: 1500,
    category: 'Full Day Package',
    purpose: 'Premium gaming experience with exclusive facilities.',
    includes: [
      'Private gaming booth',
      'Premium gaming equipment',
      'Food and drinks',
      'Priority booking',
      'Personal gaming assistant',
    ],
  },
  {
    id: '3',
    title: 'Esports Training Package',
    fee: 1500,
    category: 'Coaching Package',
    purpose: 'Improve competitive gaming skills with professional coaching.',
    includes: [
      'Strategy coaching',
      'Team communication',
      'Match analysis',
      'Practice sessions',
      'Performance feedback',
    ],
  },
  {
    id: '4',
    title: 'Birthday Party Package',
    fee: 1500,
    category: 'Event Package',
    purpose: 'Host a gaming-themed birthday celebration.',
    includes: [
      'Reserved gaming area',
      'Multiplayer competitions',
      'Party decorations',
      'Catering',
      'Tournament prizes',
    ],
  },
  {
    id: '5',
    title: 'Virtual Reality Experience',
    fee: 750,
    category: 'Individual Experience',
    purpose: 'Explore immersive virtual reality games.',
    includes: ['VR headset', 'Choice of games', 'Staff assistance'],
  },
  {
    id: '6',
    title: 'Racing Simulator Challenge',
    fee: 750,
    category: 'Individual Experience',
    purpose: 'Race on professional driving simulators.',
    includes: ['Racing simulator', 'Choice of tracks', 'Leaderboard competition'],
  },
  {
    id: '7',
    title: 'Escape Room Challenge',
    fee: 750,
    category: 'Individual Experience',
    purpose: 'Solve puzzles and escape before time runs out.',
    includes: ['Team challenge', 'Themed escape room', 'Digital scorecard'],
  },
];

// Custom Logo Component mirroring the purple triangle branding
const LogoComponent = () => (
  <View style={styles.logoContainer}>
    <View style={styles.logoTriangleOuter}>
      <View style={styles.logoTriangleInner} />
    </View>
    <Text style={styles.logoTitle}>ARENA</Text>
    <Text style={styles.logoSubtitle}>GAMES</Text>
    <Text style={styles.brandTagline}>NEXT LEVEL GAMING & ESPORTS ARENA</Text>
  </View>
);

// ==========================================
// 1. HOME SCREEN
// ==========================================
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LogoComponent />

        <View style={styles.infoBox}>
          <Text style={styles.sectionHeader}>Welcome to the Arena</Text>
          <Text style={styles.bodyText}>
            Next Level Gaming & Esports Arena is a modern entertainment venue in
            Johannesburg established in 2023 by Jason Naidoo. We cater to
            casual players, competitive gamers, schools, and corporate events
            with state-of-the-art gaming equipment and organised events.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Explore Our Arena</Text>
        
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Packages')}
        >
          <MaterialCommunityIcons name="gamepad-variant" size={32} color={COLORS.accentPurple} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Packages & Experiences</Text>
            <Text style={styles.cardSub}>View passes, VR, simulators & training</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.grayText} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Calculator')}
        >
          <MaterialCommunityIcons name="calculator" size={32} color={COLORS.accentPurple} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Calculate Total Fees</Text>
            <Text style={styles.cardSub}>Select bookings, apply discounts & generate quote</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.grayText} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('About Us')}
        >
          <MaterialCommunityIcons name="information" size={32} color={COLORS.accentPurple} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>About Next Level</Text>
            <Text style={styles.cardSub}>Our history, vision, mission & goals</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.grayText} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// 2. ABOUT US SCREEN
// ==========================================
function AboutScreen() {
  const [selectedMilestone, setSelectedMilestone] = useState('2023');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const milestones = [
    { year: '2023', text: 'Established in Johannesburg by Jason Naidoo to bridge the gaming tech gap.' },
    { year: '2024', text: 'Expanded to host inter-school esports tournaments & corporate leagues.' },
    { year: '2025', text: 'Upgraded all rigs to top-tier GPUs & added VR & Pro Racing Simulators.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>About Us</Text>

        {/* Dropdown Menu Requirement */}
        <Text style={styles.inputLabel}>Filter Company Timeline (Drop-down Menu):</Text>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={styles.dropdownText}>Milestone Year: {selectedMilestone}</Text>
          <Ionicons name={dropdownOpen ? "chevron-up" : "chevron-down"} size={20} color={COLORS.white} />
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownList}>
            {milestones.map((item) => (
              <TouchableOpacity
                key={item.year}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedMilestone(item.year);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item.year} Highlights</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.highlightCard}>
          <Text style={styles.cardTitle}>History ({selectedMilestone})</Text>
          <Text style={styles.bodyText}>
            {milestones.find((m) => m.year === selectedMilestone)?.text}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.sectionHeader}>Our Vision</Text>
          <Text style={styles.bodyText}>
            To be South Africa's premier esports and gaming hub, empowering players of all ages through high-performance technology, community, and competition.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.sectionHeader}>Our Mission</Text>
          <Text style={styles.bodyText}>
            Provide world-class gaming facilities, inclusive event packages, and professional coaching accessible to individuals, families, schools, and corporate groups.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.sectionHeader}>Core Goals</Text>
          <Text style={styles.bodyBullet}>• Maintain cutting-edge hardware and high-speed fiber internet.</Text>
          <Text style={styles.bodyBullet}>• Develop local esports talent through structured coaching.</Text>
          <Text style={styles.bodyBullet}>• Deliver unforgettable social gaming experiences.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// 3. PACKAGES & EXPERIENCES SCREEN
// ==========================================
function PackagesScreen() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredData =
    filter === 'All'
      ? PACKAGES_DATA
      : PACKAGES_DATA.filter((p) => p.category === filter);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Packages & Experiences</Text>

        {/* Filter Bar */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {['All', 'Full Day Package', 'Individual Experience', 'Coaching Package', 'Event Package'].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.filterChip, filter === cat && styles.filterChipActive]}
              onPress={() => setFilter(cat)}
            >
              <Text style={[styles.filterChipText, filter === cat && styles.filterChipTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {filteredData.map((pkg) => (
          <View key={pkg.id} style={styles.packageCard}>
            <View style={styles.packageHeader}>
              <Text style={styles.packageTitle}>{pkg.title}</Text>
              <Text style={styles.packageFee}>R{pkg.fee}</Text>
            </View>
            <Text style={styles.packagePurpose}>{pkg.purpose}</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => setSelectedPackage(pkg)}
            >
              <Text style={styles.detailButtonText}>View Full Details</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Detail Modal for Each Screen Requirement */}
        <Modal
          visible={selectedPackage !== null}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSelectedPackage(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedPackage && (
                <>
                  <Text style={styles.modalTitle}>{selectedPackage.title}</Text>
                  <Text style={styles.modalFee}>Package Fee: R{selectedPackage.fee}</Text>
                  <Text style={styles.modalPurpose}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.white }}>Purpose: </Text>
                    {selectedPackage.purpose}
                  </Text>
                  <Text style={styles.includesTitle}>Includes:</Text>
                  {selectedPackage.includes.map((item, index) => (
                    <Text key={index} style={styles.modalBullet}>
                      • {item}
                    </Text>
                  ))}
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setSelectedPackage(null)}
                  >
                    <Text style={styles.closeButtonText}>Close Screen</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// 4. CALCULATE TOTAL FEES SCREEN
// ==========================================
function CalculatorScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [venue, setVenue] = useState('Johannesburg Main Arena');
  const [showVenueDropdown, setShowVenueDropdown] = useState(false);

  // Array to store customer selected package IDs
  const [selectedIds, setSelectedIds] = useState([]);
  
  // Calculation result state
  const [calculatedQuote, setCalculatedQuote] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Validation and calculation logic
  const handleCalculate = () => {
    setErrorMessage('');

    // Error Handling Requirements: Empty field check
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    // Data Type / Pattern check for Phone (digits only, length)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }
    // Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (selectedIds.length === 0) {
      setErrorMessage('Please select at least one package or experience.');
      return;
    }

    // Retrieve chosen objects into array
    const chosenItems = PACKAGES_DATA.filter((p) => selectedIds.includes(p.id));
    const rawTotal = chosenItems.reduce((sum, item) => sum + item.fee, 0);

    // Discount percentage rule:
    // 1 booking: 0%, 2: 5%, 3: 10%, >3: 15%
    let discountRate = 0;
    const count = chosenItems.length;
    if (count === 2) discountRate = 0.05;
    else if (count === 3) discountRate = 0.10;
    else if (count > 3) discountRate = 0.15;

    const discountAmount = rawTotal * discountRate;
    const discountedSubtotal = rawTotal - discountAmount;
    const vatAmount = discountedSubtotal * 0.15; // VAT 15%
    const grandTotal = discountedSubtotal + vatAmount;

    setCalculatedQuote({
      items: chosenItems,
      count,
      rawTotal,
      discountRate: discountRate * 100,
      discountAmount,
      subtotalExVat: discountedSubtotal,
      vatAmount,
      grandTotal,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Calculate Total Fees</Text>

        {errorMessage !== '' && (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle" size={20} color={COLORS.white} />
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}

        {/* Customer Details Form */}
        <View style={styles.formSection}>
          <Text style={styles.formSectionTitle}>Customer Information</Text>

          <Text style={styles.inputLabel}>Full Name *</Text>
          <TextInput
            style={styles.textInput}
            placeholder="John Doe"
            placeholderTextColor="#666"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.inputLabel}>Phone Number (10 digits) *</Text>
          <TextInput
            style={styles.textInput}
            placeholder="0821234567"
            placeholderTextColor="#666"
            keyboardType="numeric"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.inputLabel}>Email Address *</Text>
          <TextInput
            style={styles.textInput}
            placeholder="john@example.com"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Preferred Venue Dropdown */}
          <Text style={styles.inputLabel}>Select Preferred Venue:</Text>
          <TouchableOpacity
            style={styles.dropdownHeader}
            onPress={() => setShowVenueDropdown(!showVenueDropdown)}
          >
            <Text style={styles.dropdownText}>{venue}</Text>
            <Ionicons name="chevron-down" size={18} color={COLORS.white} />
          </TouchableOpacity>
          {showVenueDropdown && (
            <View style={styles.dropdownList}>
              {['Johannesburg Main Arena', 'Sandton Hub', 'Rosebank Esports Studio'].map((v) => (
                <TouchableOpacity
                  key={v}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setVenue(v);
                    setShowVenueDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Checkbox List of Available Packages */}
        <Text style={styles.formSectionTitle}>Select Experiences / Packages</Text>
        {PACKAGES_DATA.map((pkg) => {
          const isSelected = selectedIds.includes(pkg.id);
          return (
            <TouchableOpacity
              key={pkg.id}
              style={[styles.checkboxCard, isSelected && styles.checkboxCardSelected]}
              onPress={() => toggleSelect(pkg.id)}
            >
              <Ionicons
                name={isSelected ? 'checkbox' : 'square-outline'}
                size={24}
                color={isSelected ? COLORS.lightPurple : COLORS.grayText}
              />
              <View style={styles.checkboxTextContainer}>
                <Text style={styles.checkboxTitle}>{pkg.title}</Text>
                <Text style={styles.checkboxSub}>Fee: R{pkg.fee}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity style={styles.calcButton} onPress={handleCalculate}>
          <Text style={styles.calcButtonText}>Calculate Quote</Text>
        </TouchableOpacity>

        {/* Calculated Quote Table Display */}
        {calculatedQuote && (
          <View style={styles.invoiceCard}>
            <Text style={styles.invoiceTitle}>Quoted Fee Breakdown</Text>
            <Text style={styles.invoiceMeta}>Customer: {name} ({venue})</Text>

            {/* Table Requirement */}
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableCell, styles.cellFlex2, styles.headerText]}>Item</Text>
                <Text style={[styles.tableCell, styles.headerText]}>Price</Text>
              </View>
              {calculatedQuote.items.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  <Text style={[styles.tableCell, styles.cellFlex2]}>{item.title}</Text>
                  <Text style={styles.tableCell}>R{item.fee}</Text>
                </View>
              ))}
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Raw Total:</Text>
              <Text style={styles.summaryVal}>R{calculatedQuote.rawTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Discount ({calculatedQuote.discountRate}%):</Text>
              <Text style={[styles.summaryVal, { color: COLORS.successGreen }]}>
                -R{calculatedQuote.discountAmount.toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal Excl. VAT:</Text>
              <Text style={styles.summaryVal}>R{calculatedQuote.subtotalExVat.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>VAT (15%):</Text>
              <Text style={styles.summaryVal}>R{calculatedQuote.vatAmount.toFixed(2)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total Quoted Fee:</Text>
              <Text style={styles.totalVal}>R{calculatedQuote.grandTotal.toFixed(2)}</Text>
            </View>

            <Text style={styles.disclaimerText}>
              * Note: This total is an estimated quoted fee including VAT (15%) and multi-booking discounts. This is not a formal invoice.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// 5. CONTACT DETAILS SCREEN
// ==========================================
function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Contact Details</Text>

        <View style={styles.infoBox}>
          <Text style={styles.cardTitle}>Johannesburg Venue</Text>

          <View style={styles.contactRow}>
            <Ionicons name="call" size={20} color={COLORS.lightPurple} />
            <Text style={styles.contactText}>+27 (0)11 555 0199</Text>
          </View>

          <View style={styles.contactRow}>
            <Ionicons name="mail" size={20} color={COLORS.lightPurple} />
            <Text style={styles.contactText}>info@arenagames.co.za</Text>
          </View>

          <View style={styles.contactRow}>
            <Ionicons name="location" size={20} color={COLORS.lightPurple} />
            <Text style={styles.contactText}>
              Building 4, Tech Park, Sandton / Rosebank, Johannesburg, South Africa
            </Text>
          </View>
        </View>

        {/* Map Placeholder Graphic */}
        <Text style={styles.sectionTitle}>Interactive Venue Map</Text>
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={48} color={COLORS.accentPurple} />
          <Text style={styles.mapText}>Johannesburg Flagship Arena</Text>
          <Text style={styles.mapSub}>GPS: -26.1463° S, 28.0436° E</Text>
        </View>

        <Text style={styles.sectionTitle}>Connect With Us</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <MaterialCommunityIcons name="discord" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <MaterialCommunityIcons name="twitch" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <MaterialCommunityIcons name="instagram" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <MaterialCommunityIcons name="youtube" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// BOTTOM TAB NAVIGATION CONFIGURATION
// ==========================================
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: COLORS.lightPurple,
          tabBarInactiveTintColor: COLORS.grayText,
          tabBarStyle: {
            backgroundColor: '#12121B',
            borderTopColor: COLORS.cardBorder,
            height: 60,
            paddingBottom: 8,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'About Us') iconName = 'information-circle';
            else if (route.name === 'Packages') iconName = 'game-controller';
            else if (route.name === 'Calculator') iconName = 'calculator';
            else if (route.name === 'Contact') iconName = 'call';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Us" component={AboutScreen} />
        <Tab.Screen name="Packages" component={PackagesScreen} />
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ==========================================
// STYLESHEET (High-Tech Purple Dark Theme)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: 18,
    paddingBottom: 40,
  },
  // Logo Styling matching purple triangle design
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoTriangleOuter: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 45,
    borderRightWidth: 45,
    borderBottomWidth: 75,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.primaryPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoTriangleInner: {
    position: 'absolute',
    top: 25,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 35,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.background,
  },
  logoTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 4,
  },
  logoSubtitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 3,
    marginTop: -4,
  },
  brandTagline: {
    color: COLORS.accentPurple,
    fontSize: 11,
    fontWeight: '600',
    marginTop: 6,
    letterSpacing: 1,
  },
  screenHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 18,
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    padding: 16,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    marginBottom: 14,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accentPurple,
    marginBottom: 8,
  },
  bodyText: {
    color: COLORS.grayText,
    fontSize: 14,
    lineHeight: 20,
  },
  bodyBullet: {
    color: COLORS.grayText,
    fontSize: 14,
    marginVertical: 2,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    marginBottom: 12,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSub: {
    color: COLORS.grayText,
    fontSize: 12,
    marginTop: 2,
  },
  // Dropdown Menu Styles
  inputLabel: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },
  dropdownHeader: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: COLORS.white,
    fontSize: 14,
  },
  dropdownList: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    marginTop: 4,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },
  dropdownItemText: {
    color: COLORS.white,
    fontSize: 14,
  },
  highlightCard: {
    backgroundColor: '#2A1838',
    borderColor: COLORS.primaryPurple,
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    marginVertical: 12,
  },
  // Packages Screen Styles
  filterRow: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  filterChipActive: {
    backgroundColor: COLORS.primaryPurple,
    borderColor: COLORS.lightPurple,
  },
  filterChipText: {
    color: COLORS.grayText,
    fontSize: 12,
  },
  filterChipTextActive: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  packageCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    padding: 16,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    marginBottom: 12,
  },
  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packageTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  packageFee: {
    color: COLORS.accentPurple,
    fontSize: 16,
    fontWeight: 'bold',
  },
  packagePurpose: {
    color: COLORS.grayText,
    fontSize: 13,
    marginVertical: 8,
  },
  detailButton: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  detailButtonText: {
    color: COLORS.lightPurple,
    fontWeight: 'bold',
    fontSize: 13,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 22,
    borderWidth: 1,
    borderColor: COLORS.primaryPurple,
  },
  modalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalFee: {
    color: COLORS.accentPurple,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  modalPurpose: {
    color: COLORS.grayText,
    fontSize: 14,
    marginBottom: 12,
  },
  includesTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 6,
  },
  modalBullet: {
    color: COLORS.grayText,
    fontSize: 13,
    marginVertical: 3,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: COLORS.primaryPurple,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  // Calculator Form Styles
  formSection: {
    marginBottom: 14,
  },
  formSectionTitle: {
    color: COLORS.accentPurple,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  textInput: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 8,
    padding: 12,
    color: COLORS.white,
    fontSize: 14,
  },
  checkboxCard: {
    backgroundColor: COLORS.cardBg,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxCardSelected: {
    borderColor: COLORS.primaryPurple,
    backgroundColor: '#231530',
  },
  checkboxTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  checkboxTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  checkboxSub: {
    color: COLORS.grayText,
    fontSize: 12,
  },
  calcButton: {
    backgroundColor: COLORS.primaryPurple,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 16,
  },
  calcButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorBox: {
    backgroundColor: COLORS.errorRed,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  errorText: {
    color: COLORS.white,
    marginLeft: 8,
    fontSize: 13,
  },
  // Invoice / Table Display
  invoiceCard: {
    backgroundColor: '#161624',
    borderRadius: 12,
    padding: 16,
    borderColor: COLORS.primaryPurple,
    borderWidth: 1,
    marginTop: 10,
  },
  invoiceTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  invoiceMeta: {
    color: COLORS.grayText,
    fontSize: 12,
    marginBottom: 12,
  },
  table: {
    width: '100%',
    marginVertical: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.cardBorder,
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryPurple,
  },
  tableCell: {
    color: COLORS.grayText,
    fontSize: 13,
    flex: 1,
  },
  cellFlex2: {
    flex: 2,
  },
  headerText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.cardBorder,
    marginVertical: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  summaryLabel: {
    color: COLORS.grayText,
    fontSize: 13,
  },
  summaryVal: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
  },
  totalLabel: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalVal: {
    color: COLORS.lightPurple,
    fontSize: 18,
    fontWeight: 'bold',
  },
  disclaimerText: {
    color: COLORS.grayText,
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 12,
  },
  // Contact Screen Styles
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  contactText: {
    color: COLORS.white,
    marginLeft: 10,
    fontSize: 13,
    flex: 1,
  },
  mapPlaceholder: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
  },
  mapText: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginTop: 8,
  },
  mapSub: {
    color: COLORS.grayText,
    fontSize: 12,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialBtn: {
    backgroundColor: COLORS.cardBg,
    padding: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
});