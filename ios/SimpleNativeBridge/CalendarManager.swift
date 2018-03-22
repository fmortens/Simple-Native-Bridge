//
//  CalendarManager.swift
//  SimpleNativeBridge
//
//  Created by Frank Mortensen on 22/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc(CalendarManager)
class CalendarManager: NSObject {
  
  @objc(addEvent:location:date:)
  func addEvent(
    name: String,
    location: String,
    date: NSNumber
  ) -> Void {
    // Date is ready to use!
    print("addEvent was called with \(name) and \(location)")
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["someKey": "someValue"]
  }
  
}
