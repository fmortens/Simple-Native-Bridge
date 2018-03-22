//
//  CalendarManagerBridge.m
//  SimpleNativeBridge
//
//  Created by Frank Mortensen on 22/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MessageManager, NSObject)

RCT_EXTERN_METHOD(updateMessage:(NSString *)message)

@end
