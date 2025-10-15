# Test Tagging Strategy

## Overview

Our testing strategy uses tags to categorize tests by importance and scope, allowing for intelligent test selection and prioritization.

## Tag Categories

### @critical
**Purpose**: Essential tests that must always pass
**When to use**: Core functionality, critical user journeys, basic navigation
**CI behavior**: Always runs first, fails fast if issues found

**Examples**:
- Homepage loads correctly
- Navigation between pages works
- Core content displays properly
- Basic user flows function

### @smoke
**Purpose**: Quick validation tests for basic functionality
**When to use**: Essential features, happy path scenarios
**CI behavior**: Runs in smoke test suites

**Examples**:
- Login/logout functionality
- Search functionality
- Form submissions

### @integration
**Purpose**: Tests that verify multiple components work together
**When to use**: Cross-component interactions, API integrations
**CI behavior**: Runs in integration test suites

**Examples**:
- User registration flow
- Payment processing
- Data synchronization

### @performance
**Purpose**: Tests that measure performance metrics
**When to use**: Load times, Core Web Vitals, resource usage
**CI behavior**: Runs in performance test suites

**Examples**:
- Page load times
- API response times
- Memory usage

### @accessibility
**Purpose**: Tests that verify accessibility compliance
**When to use**: WCAG compliance, screen reader compatibility
**CI behavior**: Runs in accessibility test suites

**Examples**:
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios

## Usage Examples

### Tagging Test Suites
```typescript
test.describe('Critical User Flows @critical', () => {
  // All tests in this suite are critical
});
```

### Tagging Individual Tests
```typescript
test('should load homepage @critical', async ({ page }) => {
  // This specific test is critical
});
```

### Multiple Tags
```typescript
test('should handle user login @critical @smoke', async ({ page }) => {
  // This test is both critical and a smoke test
});
```

## CI/CD Integration

### Critical Test Priority
```bash
# Run only critical tests
npm run test:e2e -- --grep="@critical"

# Run smoke tests
npm run test:e2e -- --grep="@smoke"

# Run multiple tags
npm run test:e2e -- --grep="@critical|@smoke"
```

### Test Selection Logic
1. **Critical tests run first** - Fail fast if core functionality is broken
2. **Full test suite runs** - Comprehensive coverage for all changes
3. **Tagged test suites** - Run specific test categories as needed

## Best Practices

### When to Tag Tests
- **@critical**: Core business functionality, user-facing features
- **@smoke**: Essential features, happy path scenarios
- **@integration**: Multi-component interactions
- **@performance**: Performance-sensitive features
- **@accessibility**: User accessibility requirements

### Tag Naming Conventions
- Use lowercase with hyphens: `@critical`, `@smoke-test`
- Be descriptive: `@user-authentication`, `@payment-flow`
- Keep tags focused: One primary purpose per tag

### Test Organization
- Group related tests with the same tag
- Use describe blocks for tag inheritance
- Tag individual tests when they differ from the suite

## Monitoring and Reporting

### Test Results by Tag
- Track pass/fail rates by tag category
- Monitor critical test stability
- Identify patterns in test failures

### Performance Metrics
- Measure execution time by tag
- Track critical test performance
- Optimize slow-running test suites

## Future Enhancements

### Phase 3: Advanced Selection
- Dependency-based test selection
- Impact analysis for changed files
- Performance-based test prioritization

### Dynamic Tagging
- Automatic tag assignment based on test content
- Machine learning for test categorization
- Risk-based test selection
