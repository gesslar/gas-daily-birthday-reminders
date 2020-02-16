[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

# gas-daily-birthday-reminders

Throughout these instructions, you may on your screen see your project referred to "Untitled project". I'm not sure why it does this, however, it does not appear to be a thing about which to be worried. I will address the project as "Untitled" in the below instructions. However, by some fluke, you may see your project name on the screens. If you do, then you are meant to click that and not look for the word "Untitled."

1. Create a new script at https://script.google.com/.
2. Copy and Paste in `Code.js` to `Code.gs` in the script editor.
3. Save the project and give it a name, such as `Daily Birthday Reminders`.
4. Select `run` from the toolbar function selector.
5. Click the `Play` button.
6. Click `Review Permissions`.
7. Click your account.
8. Click the `Advanced` link.
9. Click `Go to Untitled project (unsafe)`.
10. CLick `Allow`.
11. `Edit` > `Current project's triggers`.
12. Click `Add Trigger`.
13. Select the following options:
    1. Function: run.
    2. Deployment: Head.
    3. Event source: Time-driven.
    4. Time-based trigger type: Day timer (recommended).
    5. Time of day: Midnight to 1am (recommended).
    6. Failure notifications: Whatever you like.
14. Click `Save`.
15. Close the triggers window.

# Functionality
This script runs as often as you have specified in the trigger above. It looks through all of your calendars to find any that match the format of "SoAnd So's Birthday" It doesn't matter if it's one or two words, it's basically looking for xxxxxxxxxxxxxxx's birthday.

After it runs and it finds birthdays, it will email you from yourself a list of names whose birthdays were discovered for that day.

That is all, as they say. ♥
