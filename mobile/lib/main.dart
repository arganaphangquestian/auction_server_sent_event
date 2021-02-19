import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/screen/user_screen.dart';

import 'setup.dart';

void main() {
  setup();
  runApp(Application());
}

class Application extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: UserScreen(),
    );
  }
}
