import 'package:hive/hive.dart';
import 'package:dio/dio.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:get_it/get_it.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart' as DotEnv;

final GetIt locator = GetIt.instance;

void setup() async {
  await Hive.initFlutter();
  // Create Box User
  await Hive.openBox("user");
  await DotEnv.load(fileName: ".env");
  locator.registerLazySingleton<Dio>(() => customNetwork());
}

Dio customNetwork() {
  final _dio = Dio();
  _dio.options = BaseOptions(
    baseUrl: DotEnv.env["API_URL"],
  );
  _dio.interceptors.clear();
  return _dio;
}
