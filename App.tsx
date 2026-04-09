import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const quickModules = [
  { title: 'Kadro', subtitle: '25 oyuncu • 4 sakat' },
  { title: 'Transfer', subtitle: '3 hedef • 1 teklif' },
  { title: 'Antrenman', subtitle: 'Yük: Dengeli' },
  { title: 'Taktik', subtitle: '4-2-3-1 • Pres Orta' },
  { title: 'Lig Tablosu', subtitle: 'Sıra: 3 / 18' },
  { title: 'Finans', subtitle: 'Haftalık +2.4M ₺' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <View>
            <Text style={styles.clubLabel}>Kulüp</Text>
            <Text style={styles.clubName}>Istanbul Lions FK</Text>
            <Text style={styles.leagueText}>Türkiye Süper Lig • Sezon 7</Text>
          </View>
          <View style={styles.clubBadge}>
            <Text style={styles.badgeText}>IL</Text>
          </View>
        </View>

        <View style={styles.metricsRow}>
          <View style={styles.metricCard}>
            <Text style={styles.metricTitle}>Bütçe</Text>
            <Text style={styles.metricValue}>₺138.4M</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricTitle}>Takım Gücü</Text>
            <Text style={styles.metricValue}>91</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricTitle}>Lig Haftası</Text>
            <Text style={styles.metricValue}>18</Text>
          </View>
        </View>

        <View style={styles.matchCard}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>Sonraki Maç</Text>
            <Text style={styles.cardChip}>Yarın 20:45</Text>
          </View>
          <Text style={styles.matchTeams}>Istanbul Lions FK vs Karadeniz 61</Text>
          <Text style={styles.matchSubtext}>İç Saha • Hazırlık Oranı %87</Text>

          <View style={styles.readinessBlock}>
            <Text style={styles.readinessLabel}>Moral</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: '84%' }]} />
            </View>
          </View>

          <View style={styles.readinessBlock}>
            <Text style={styles.readinessLabel}>Kondisyon</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: '78%' }]} />
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Kulüp Modülleri</Text>
        <View style={styles.modulesGrid}>
          {quickModules.map((module) => (
            <View key={module.title} style={styles.moduleCard}>
              <Text style={styles.moduleTitle}>{module.title}</Text>
              <Text style={styles.moduleSubtitle}>{module.subtitle}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tableCard}>
          <Text style={styles.cardTitle}>Mini Lig Tablosu</Text>
          <View style={styles.tableHead}>
            <Text style={styles.tableHeadText}>#</Text>
            <Text style={[styles.tableHeadText, styles.teamCol]}>Takım</Text>
            <Text style={styles.tableHeadText}>P</Text>
          </View>

          {[
            ['1', 'Ankara City', '42'],
            ['2', 'Ege United', '40'],
            ['3', 'Istanbul Lions FK', '38'],
            ['4', 'Karadeniz 61', '36'],
          ].map(([rank, team, points]) => (
            <View key={team} style={styles.tableRow}>
              <Text style={styles.tableCell}>{rank}</Text>
              <Text style={[styles.tableCell, styles.teamCol]}>{team}</Text>
              <Text style={styles.tableCell}>{points}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b1117',
  },
  content: {
    padding: 16,
    paddingBottom: 28,
  },
  heroCard: {
    backgroundColor: '#111a24',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2b39',
  },
  clubLabel: {
    color: '#6a8096',
    fontSize: 12,
    marginBottom: 4,
  },
  clubName: {
    color: '#eef6ff',
    fontSize: 20,
    fontWeight: '700',
  },
  leagueText: {
    color: '#8ea2b8',
    marginTop: 4,
  },
  clubBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1ea96f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#052a1a',
    fontWeight: '800',
    fontSize: 18,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#121d29',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1e2d3c',
  },
  metricTitle: {
    color: '#85a0b8',
    fontSize: 12,
  },
  metricValue: {
    color: '#f2f8ff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 6,
  },
  matchCard: {
    marginTop: 14,
    backgroundColor: '#101a24',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1a2a3b',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#edf7ff',
    fontSize: 16,
    fontWeight: '700',
  },
  cardChip: {
    color: '#0b2c1d',
    backgroundColor: '#27c07d',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 12,
  },
  matchTeams: {
    marginTop: 10,
    color: '#f3fbff',
    fontWeight: '700',
    fontSize: 15,
  },
  matchSubtext: {
    marginTop: 4,
    color: '#8fa6bb',
    fontSize: 13,
  },
  readinessBlock: {
    marginTop: 10,
  },
  readinessLabel: {
    color: '#b6c8d8',
    marginBottom: 5,
    fontSize: 12,
  },
  progressTrack: {
    height: 9,
    borderRadius: 10,
    backgroundColor: '#1d2c3a',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2bc984',
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    color: '#e5f2ff',
    fontWeight: '700',
    fontSize: 15,
  },
  modulesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  moduleCard: {
    width: '48.5%',
    backgroundColor: '#111a25',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1d2c3b',
  },
  moduleTitle: {
    color: '#f1f8ff',
    fontWeight: '700',
    fontSize: 14,
  },
  moduleSubtitle: {
    marginTop: 4,
    color: '#8ea6bc',
    fontSize: 12,
  },
  tableCard: {
    marginTop: 14,
    backgroundColor: '#0f1822',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1d2a38',
    padding: 12,
  },
  tableHead: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#203042',
    marginTop: 8,
  },
  tableHeadText: {
    color: '#8ea5bc',
    width: 34,
    fontSize: 12,
    fontWeight: '700',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#182634',
  },
  tableCell: {
    color: '#e8f4ff',
    width: 34,
    fontSize: 13,
  },
  teamCol: {
    flex: 1,
    width: 'auto',
  },
});
