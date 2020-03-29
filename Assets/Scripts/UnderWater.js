#pragma strict

@script ExecuteInEditMode
@script AddComponentMenu ("Image Effects/Custom/Underwater")

private var mat : Material;
private var shader : Shader;

public var animate = true;
public var speed : float = 1.5;

public var tint : Color = Color.white;

@Range (0,64)
public var distortionAmount : float = 10.0f;
public var distortion : Texture;
public var distortionTiling : Vector4 = Vector4 (0,0,1,1);

//public var water : Transform;

function OnRenderImage (src : RenderTexture, dest : RenderTexture)
{
    /*if (transform.position.y < water.position.y)
    {*/
        if (!shader)
        {
            shader = Shader.Find ("Hidden/Underwater");
        }
        if (!mat)
        {
            mat = new Material (shader);
        }

        if (animate == true)
        {
            distortionTiling.x += speed / 100 * Time.deltaTime;
        }

        mat.SetColor ("_Tint", tint);
        mat.SetFloat ("_DistAmt", distortionAmount);
        mat.SetTexture ("_Distortion", distortion);
        mat.SetVector ("_DistVect", distortionTiling);

        Graphics.Blit (src, dest, mat);
    /*}
    else
    {
        Graphics.Blit (src, dest, new Material (Shader.Find ("Hidden/Default")));
    }*/
}