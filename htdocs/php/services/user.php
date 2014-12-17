<?php

class User extends RestGeneric{

    public static $methods = array(
        'login' => array(
            //Types d'appels autorisés
            'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
            //Description de la méthode
            'description' => 'connexion avec authetification d’un utilisateur, la fonction retrourne true si l’opération s’est bien déroulée, false sinon.',
            //Paramètres
            'params' => array('action'=>array('required' => true, 'type' => RestGeneric::PARAM_TYPE_STRING, 'description' => '', 'exampleValue' => '{"login":"test", "password":"aze789"}')),
            //Exemple de retour (auto généré)
            'returnExample' => array('type' => RestGeneric::RETURN_EXAMPLE_DYNAMIC)
            ),
        'logout' => array(
            'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
            'description' => 'Déconnexion',
            'params' => array(),
            'returnExample' => array('type' => RestGeneric::RETURN_EXAMPLE_STATIC, 'value' => '{"message":"true"}')
            ),
            
         'checkLogin' => array(
            'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
            'description' => 'Vérification du statut d\'un utilisateur',
            'params' => array(
                //Paramètre obligatoire
                'sid' => array('required' => true, 'type' => RestGeneric::PARAM_TYPE_STRING, 'description' => 'session en cours', 'exampleValue' => 'XXXXX')
                //Paramètre facultatif (avec assignation à la valeur "Toto", lorsqu'il n'est pas renseigné)
                ),
            'returnExample' => array('type' => RestGeneric::RETURN_EXAMPLE_STATIC, 'value' => '{"addStatus":"ok"}')
            ),
            
          'register' => array(
            'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
            'description' => 'Sauvegarde les données utilisateur',
            'params' => array('action'=>array('required' => true, 'type' => RestGeneric::PARAM_TYPE_STRING, 'description' => '', 'exampleValue' => '{"session":"XXXXXXX","gender":"gender", "name":"aze789", "firstname":"test", "adress":"1 rue royale", "zipcode":"92210", "town":"St Cloud", "country":"France", "password":"aze789"}')),
            'returnExample' => array('type' => RestGeneric::RETURN_EXAMPLE_STATIC, 'value' => '{"message":"true"}')
            )           
        );


    function login($request){
		if (!isset($request['action'])) {
				return array('code'=>'false','message'=>"Missing params");
		}
		
		if (isset($request['action'])) {
			$action = json_decode($request['action']);
			if ($action == null /*|| is_array($action)*/) {
				return array('code'=>'false','message'=>$action->login);

			}
			$login = $action->login;
			$password = $action->password;
			// hash the password with the unique salt
			$hashPassword = hashPassword($action->password);
			
			// check in database
			//$result = $db->query('SELECT * FROM account a WHERE a.login = "'.addslashes($login).'" AND a.password = "'.addslashes($hashPassword).'"', false, true);
			
			//TODO // Check if the password in the database matches
			
			if($login=='test' && $password=='aze789'){ //if(isset($data) && !empty($data)){
				//session_regenerate_id(true);
				sec_session_start();

				$sid=session_id();
				$_SESSION['authenticate']=true;
                $_SESSION['user_login']=$login;

				return array(array("session" => $sid, "message" => "true"));
			}else {
				return array(array("session" => '', "message" => "false"));					
			}
			
			//TODO
			return array('login' => $action->login);
		}

/*		
        if (!isset($_SESSION['people'])){
            $_SESSION['people'] = array();
        }

        return array('people' => $_SESSION['people']);
        */ 
    }

    function logout($request){
		
		// Unset all session values 
		$_SESSION = array();
 
		// get session parameters 
		$params = session_get_cookie_params();
 
		// Delete the actual cookie. 
		setcookie(session_name(),
        '', time() - 42000, 
        $params["path"], 
        $params["domain"], 
        $params["secure"], 
        $params["httponly"]);
 
		// Destroy session 
		session_destroy();

        return array('message' => 'true');
    }


	function checkLogin($sid) {
				
		// Check if all session variables are set 
		if (isset($_SESSION['authenticate']) && $_SESSION['authenticate']){	
				return array('message' => 'logged in');
		}else 
				return array('message' => 'connexion refused'); 	
		
		
		
	}
	
	function register($request) {
		if (!isset($request['action'])) {
				return array('code'=>'false','message'=>"Missing params");
		}
		
		if (isset($request['action'])) {
			$action = json_decode($request['action']);
			if ($action == null /*|| is_array($action)*/) {
				return array('code'=>'false','message'=>$action->login);

			}
			$gender 	= $action->gender;
			$name 		= $action->name;
			$firstname 	= $action->firstname;
			$adress 	= $action->adress;
			$zipcode 	= $action->zipcode;
			$town 		= $action->town;
			$country 	= $action->country;
			$password 	= $action->password;
			$hashPassword = hashPassword($password);
			
			//TODO save in database
		}
		
	}


	function addIntership($request) {
		//TODO
		
	}
}
