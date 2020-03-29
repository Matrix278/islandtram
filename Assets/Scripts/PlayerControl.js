#pragma strict

private var hasAxe : boolean = false;

var canSwing : boolean = true;
private var isSwinging : boolean = false;
var swingTimer : float = 0.7;

private var controller : CharacterController;

function Start()
{
	hasAxe = true;
	controller = GameObject.Find("FPSArms_Axe@Idle").GetComponent(CharacterController);
}

function Update()
{
	//If we aren't moving and if we aren't swinging, then we idle!
	
	if(controller.velocity.magnitude <= 0 && isSwinging == false)
	{
		GetComponent.<Animation>().Play("IdleArms");
		GetComponent.<Animation>()["IdleArms"].wrapMode = WrapMode.Loop;
		GetComponent.<Animation>()["IdleArms"].speed = 0.2;
	}
	
	//If we're holding shift and moving, then sprint!
	
	if(controller.velocity.magnitude > 0 && Input.GetKey(KeyCode.LeftShift))
	{
		GetComponent.<Animation>().Play("Sprint");
		GetComponent.<Animation>()["Sprint"].wrapMode = WrapMode.Loop;
	}
	
	//WOODCUTTING SECTION
	if(hasAxe == true && canSwing == true)
	{
		if(Input.GetMouseButtonDown(0))
		{
			
			//Swinging animation
			GetComponent.<Animation>().Play("SwingArms");
			GetComponent.<Animation>()["SwingArms"].speed = 2;
			isSwinging = true;
			canSwing = false;
		}
	}
	
	if(canSwing == false)
	{
		swingTimer -= Time.deltaTime;
	}
	
	if(swingTimer <= 0)
	{
		swingTimer = 1;
		canSwing = true;
		isSwinging = false;
	}
}
