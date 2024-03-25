//https://anandhik.medium.com/accessibility-testing-in-playwright-1f89e4d5c4b7

import { test, expect  }  from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test('Detect Accessibility issues in entire page...', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    const scanResutls = await new AxeBuilder({ page }).analyze()
    //Console log the violations
    let violation = scanResutls.violations;
    violation.forEach(function (entry) {
        console.log(
            "Print the Violations:",
            entry.impact + " " + entry.description
        );
    });
    let count = violation.length;
    console.log("List of Violations:", count);
    expect(count).toEqual(0);
})

