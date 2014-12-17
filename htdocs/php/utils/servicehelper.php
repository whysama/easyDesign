<?php

class serviceHelper{
  private static $messages = array(
      'missing' => array('code' => '000', 'message' => 'Missing params'),
    );

  public static function isValidRequest($request){
    if (!isset($request)) {
      return false;
    }else{
      return true;
    }
  }

  public static function returnFalseMessage($keyword){
    return self::$messages[$keyword];
  }
}