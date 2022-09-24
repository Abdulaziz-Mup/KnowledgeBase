---
title: How to collect AdGuard logs
sidebar_position: 3
---

For analysis and diagnostic of different problems support service might need AdGuard log files. These files contain records about all errors occurred with the software recently. Below is the brief instruction describing the way to get the log files and send them to support service.

1. Open the AdGuard settings. Go to the General Settings section, scroll down to the end of the screen and select **Debug** Logging Level.

![Debug logging level](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_logs_1.png)

2. Reproduce the issue. 
- We strongly advise to specify the time when you reproduced the issue: it will help our support team to solve the problem.

3. Export the recorded logs using the **Export Log** button.

![Export logs](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_logs_2.png)

- Save the archive to any folder.

4. **Important**: set the logging level back to **Standard**. **Debug** logging level will slow down the application.

5. Send the archive to the AdGuard support service at support@adguard.com, describe the problem and don't forget to mention the time when you reproduced the issue.

{#trace-logs}

**Note**: sometimes support team members may ask you to send *trace* logs. Then you will need to do the following:

1. Stop AdGuard. Please don't leave the service running.

![Exit AdGuard](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_logs_3.png)
![Stop AdGuard Service](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the app with the command `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\Adguard\Adguard.exe /trace` in case if you use 32-bit one.

4. Select **Debug** logging level.

![Debug](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_logs_5.png)

5. Reproduce the issue. We strongly advise to specify the time when you reproduced the issue: it will help our support team to solve the problem.

6. Export the recorded logs using the **Export Log** button.

7.  **Important**: set the logging level back to **Standard**. **Debug** logging level will slow down the application.

Don't worry if the log file is large. We need to know as much detail as possible to fix your problem.
