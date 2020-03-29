using UnityEngine;
using System.Collections;

public class ExitToMenu : MonoBehaviour {

	public void ChangeToScene (string sceneToChangeTo){
		Application.LoadLevel (sceneToChangeTo);
	}
}