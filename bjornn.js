var skips = "WyJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDgtMDcuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA4LTA4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOC0wOS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDgtMTAuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA4LTExLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOC0xMi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDgtMTMuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA5LTE3LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOS0xOC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDktMTkuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA5LTIwLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOS0yMS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDktMjIuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA5LTIzLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOS0yNC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDktMjUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA5LTI2LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOS0yNy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMDktMjguanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTA5LTI5LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0wOS0zMC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMTAtMDEuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTEyLTAzLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0xMi0wNC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMTItMDUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTEyLTA2LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0xMi0wNy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMTItMDguanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTEyLTA5LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0xMi0xMC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMTItMTEuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDA5LTEyLTEyLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAwOS0xMi0xMy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMDktMTItMjQuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEwLTA3LTE4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wMy0xMy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDMtMTkuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTA5LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNC0xMC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDQtMTQuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTE1LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNC0xNi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDQtMTcuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTE4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNC0xOS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDQtMjAuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTIxLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNC0yMi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDQtMjMuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTI0LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNC0yNS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDQtMjYuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTI3LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNC0yOC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDQtMjkuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA0LTMwLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0wMS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMDIuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTAzLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0wNC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMDUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTA2LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0wNy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMDguanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTA5LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0xMC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMTEuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTEyLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0xMy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMTQuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTE1LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0xNi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMTcuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTE4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNS0xOS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDUtMjAuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA1LTIxLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNi0wNi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDctMTIuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA3LTEzLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wNy0zMC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDktMTguanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA5LTI0LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wOS0yNS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDktMjYuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA5LTI3LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0wOS0yOC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMDktMjkuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDExLTA5LTMwLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMS0xMC0wMy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTEtMTEtMDUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTAyLTE2LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wMi0xNy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMDgtMDEuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTA4LTAyLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wOC0wMy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMDgtMDQuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTA4LTA1LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wOC0wNi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMDgtMDcuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTA4LTA4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wOC0wOS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMDgtMTAuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTA4LTExLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wOC0xMi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMDgtMTMuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTA4LTE0LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wOC0xNS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMDgtMTYuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTA4LTE3LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0wOS0xMS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTAtMjcuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTEwLTI4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMC0yOS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTAtMzAuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTEwLTMxLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0wMS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMDIuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTAzLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0wNC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMDUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTA2LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0wNy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMDguanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTA5LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0xMC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMTEuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTEyLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0xMy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMTQuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTE1LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0xNi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMTcuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTE4LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0xOS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMjAuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTIxLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0yMi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMjMuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTI0LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0yNS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMjYuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTI3LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMS0yOC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTEtMjkuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTExLTMwLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMi0wMS5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTItMDIuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTEyLTAzLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMi0wNC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTItMDUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTEyLTA2LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMi0xMi0wNy5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTItMTItMjQuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEyLTEyLTI1LmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMy0wMS0wNi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTMtMDEtMjUuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEzLTAyLTAxLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMy0wMi0wNC5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTMtMDItMTMuanBnIiwiaHR0cDovL2Jqb3J0am9ubi5uby93ZWJjYW0vYXJjaGl2ZS9zbmFwc2hvdC0yMDEzLTA5LTAxLmpwZyIsImh0dHA6Ly9iam9ydGpvbm4ubm8vd2ViY2FtL2FyY2hpdmUvc25hcHNob3QtMjAxMy0xMC0wMi5qcGciLCJodHRwOi8vYmpvcnRqb25uLm5vL3dlYmNhbS9hcmNoaXZlL3NuYXBzaG90LTIwMTMtMTAtMDcuanBnIl0="

var skipArray = JSON.parse(atob(skips))

var image = 'http://bjortjonn.no/webcam/archive/snapshot-{year}-{month}-{day}.jpg';
String.prototype.supplant = function (o) {
    return this.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};
function randomInt(integer){
  return Math.ceil(Math.random() * integer);
};
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.

    if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
};

var duds = [];
var dt = new Date(2009, 0, 4);
var today = new Date();

var getNextImage = function (){
    //var url = image.supplant({ year: 2012, month: pad(randomInt(12), 2), day: pad(randomInt(28), 2) });
    var url = image.supplant({ year: dt.getFullYear(), month: pad(dt.getMonth() + 1, 2), day: pad(dt.getDate(), 2) });
    dt.setTime(dt.getTime() + (24 * 60 * 60 * 1000));

    if(skipArray.indexOf(url) > -1){    
      getNextImage();
    } else {
    console.log(url);
    if(dt > today){
      dt = new Date(2009, 0, 4);
    }

    var img = document.createElement('img');
    img.onload = function(){
      if(IsImageOk(img)){
        $('img').remove();
        document.body.appendChild(img);
      } else {
        duds = duds.concat(url);
      }
      console.log('getnextimage');
      getNextImage();
    };
    img.onerror = function(){
      getNextImage();
      duds = duds.concat(url);
     }
    img.src = url
    }
    dt.setTime(dt.getTime() + (24 * 60 * 60 * 1000));
}

getNextImage();
