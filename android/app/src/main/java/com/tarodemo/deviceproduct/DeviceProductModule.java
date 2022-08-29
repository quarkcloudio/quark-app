package com.tarodemo.deviceproduct;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import java.util.Map;
import java.util.HashMap;

public class DeviceProductModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  public DeviceProductModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "DeviceProduct";
  }

  private static final String E_ERROR = "E_ERROR";

  @ReactMethod
  public void getDeviceProduct(Promise promise) {
    try {
      WritableMap map = Arguments.createMap();
      map.putString("product", android.os.Build.PRODUCT);

      promise.resolve(map);
    } catch (Exception e) {
      promise.reject(E_ERROR, e);
    }
  }
}