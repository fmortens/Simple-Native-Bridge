//
//  CalendarManager.swift
//  SimpleNativeBridge
//
//  Created by Frank Mortensen on 22/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc(MessageManager)
class MessageManager: NSObject {
  
  @objc(updateMessage:)
  func updateMessage(message: String) -> Void {
    print("updateMessage was called with \(message)")
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["someKey": "someValue"]
  }
  
}
