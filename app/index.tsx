import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heading}>Farm INT Landing</Text>
        <Text style={styles.subtitle}>
          Integration-test fixture for the JustVible Farm runner.
        </Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => {
            // No-op — fixture screen, no navigation needed
          }}
          accessibilityRole="button"
          accessibilityLabel="Get started"
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  hero: {
    alignItems: 'center',
    maxWidth: 480,
    width: '100%',
  },
  heading: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#1D4ED8',
    opacity: 0.9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
